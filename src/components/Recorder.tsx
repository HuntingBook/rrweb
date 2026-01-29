import React, { useEffect } from 'react';
import { useRecorder, UseRecorderOptions } from '../hooks/useRecorder.js';
import { eventWithTime } from '@rrweb/types';

interface RecorderProps extends UseRecorderOptions {
    onStop?: (events: eventWithTime[]) => void;
    render?: (props: {
        startRecording: () => void;
        stopRecording: () => void;
        isRecording: boolean;
        events: eventWithTime[];
    }) => React.ReactNode;
}

export const Recorder: React.FC<RecorderProps> = ({ onStop, render, ...options }) => {
    const { startRecording, stopRecording, isRecording, events } = useRecorder(options);

    useEffect(() => {
        if (!isRecording && events.length > 0 && onStop) {
            onStop(events);
        }
    }, [isRecording, events, onStop]);

    if (render) {
        return <>{render({ startRecording, stopRecording, isRecording, events })}</>;
    }

    return (
        <div className="rrweb-recorder-controls">
            {!isRecording ? (
                <button onClick={startRecording}>Start Recording</button>
            ) : (
                <button onClick={stopRecording}>Stop Recording</button>
            )}
        </div>
    );
};
