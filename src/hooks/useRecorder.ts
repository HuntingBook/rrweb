import { useState, useRef, useCallback, useEffect } from 'react';
import * as rrweb from 'rrweb';
import { eventWithTime } from '@rrweb/types';

export interface UseRecorderOptions {
    emit?: (event: eventWithTime) => void;
    // Add other rrweb record options here if needed
}

export function useRecorder(options: UseRecorderOptions = {}) {
    const [isRecording, setIsRecording] = useState(false);
    const [events, setEvents] = useState<eventWithTime[]>([]);
    const stopFnRef = useRef<(() => void) | null>(null);
    const eventsRef = useRef<eventWithTime[]>([]);

    const startRecording = useCallback(() => {
        // Clear previous events
        eventsRef.current = [];
        setEvents([]);

        const stopFn = rrweb.record({
            emit(event) {
                eventsRef.current.push(event);
                if (options.emit) {
                    options.emit(event);
                }
                // Force update to keep state in sync if needed, 
                // but typically valid event list is grabbed on stop or via ref
                setEvents((prev) => [...prev, event]);
            },
        });

        if (stopFn) {
            stopFnRef.current = stopFn;
            setIsRecording(true);
        }
    }, [options]);

    const stopRecording = useCallback(() => {
        if (stopFnRef.current) {
            stopFnRef.current();
            stopFnRef.current = null;
            setIsRecording(false);
            // Ensure final state is consistent
            setEvents([...eventsRef.current]);
        }
    }, []);

    useEffect(() => {
        return () => {
            if (stopFnRef.current) {
                stopFnRef.current();
            }
        };
    }, []);

    const clearEvents = useCallback(() => {
        eventsRef.current = [];
        setEvents([]);
    }, []);

    const getRecordingDuration = useCallback(() => {
        if (eventsRef.current.length < 2) return 0;
        return eventsRef.current[eventsRef.current.length - 1].timestamp - eventsRef.current[0].timestamp;
    }, []);

    return {
        isRecording,
        events,
        startRecording,
        stopRecording,
        clearEvents,
        getRecordingDuration
    };
}
