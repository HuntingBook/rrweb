import React, { useState, useRef, useEffect, useCallback } from 'react';
import * as rrweb from 'rrweb';
import { eventWithTime } from '@rrweb/types';

export function usePlayer(events: eventWithTime[]) {
    const containerRef = useRef<HTMLDivElement>(null);
    const replayerRef = useRef<rrweb.Replayer | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [totalTime, setTotalTime] = useState(0);
    const [speed, setSpeedState] = useState(1);
    const animationFrameRef = useRef<number | null>(null);

    // Initialize player
    useEffect(() => {
        if (events.length > 0 && containerRef.current) {
            // Cleanup previous instance if any
            if (replayerRef.current) {
                replayerRef.current.destroy();
            }

            const replayer = new rrweb.Replayer(events, {
                root: containerRef.current,
            });

            replayerRef.current = replayer;
            const meta = replayer.getMetaData();
            setTotalTime(meta.totalTime);
        }

        return () => {
            if (replayerRef.current) {
                replayerRef.current.destroy();
                replayerRef.current = null;
            }
        };
    }, [events]);

    const updateProgress = useCallback(() => {
        if (replayerRef.current) {
            const time = replayerRef.current.getCurrentTime();
            setCurrentTime(time);

            if (replayerRef.current.service.state.matches('playing')) {
                animationFrameRef.current = requestAnimationFrame(updateProgress);
                setIsPlaying(true);
            } else {
                setIsPlaying(false);
            }
        }
    }, []);

    // Sync state with replayer events if rrweb exposes them easily, 
    // but for now we poll/sync on actions.
    // A simple polling loop or syncing on play/pause is basic approach.

    const play = useCallback(() => {
        if (replayerRef.current) {
            replayerRef.current.play();
            setIsPlaying(true);
            animationFrameRef.current = requestAnimationFrame(updateProgress);
        }
    }, [updateProgress]);

    const pause = useCallback(() => {
        if (replayerRef.current) {
            replayerRef.current.pause();
            setIsPlaying(false);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        }
    }, []);

    const reset = useCallback(() => {
        if (replayerRef.current) {
            replayerRef.current.pause(0);
            setIsPlaying(false);
            setCurrentTime(0);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        }
    }, []);

    const seek = useCallback((timeMs: number) => {
        if (replayerRef.current) {
            replayerRef.current.play(timeMs);
            // If we want to pause after seek, we should pause. 
            // But `play(time)` usually starts playing from that point.
            // Let's assume we want to update state.
            setCurrentTime(timeMs);
            setIsPlaying(true);
            animationFrameRef.current = requestAnimationFrame(updateProgress);
        }
    }, [updateProgress]);

    const setSpeed = useCallback((newSpeed: number) => {
        if (replayerRef.current) {
            replayerRef.current.setConfig({ speed: newSpeed });
            setSpeedState(newSpeed);
        }
    }, []);

    // Cleanup loop
    useEffect(() => {
        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        }
    }, []);

    const controls = React.useMemo(() => ({
        play,
        pause,
        reset,
        seek,
        setSpeed
    }), [play, pause, reset, seek, setSpeed]);

    const seekToProgress = useCallback((percent: number) => {
        const timeMs = (percent / 100) * totalTime;
        seek(timeMs);
    }, [seek, totalTime]);

    return {
        containerRef,
        replayer: replayerRef.current,
        status: {
            isPlaying,
            currentTime,
            totalTime,
            progress: totalTime > 0 ? (currentTime / totalTime) * 100 : 0,
            speed
        },
        controls: {
            ...controls,
            seekToProgress
        }
    };
}
