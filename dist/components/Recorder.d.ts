import { default as React } from 'react';
import { UseRecorderOptions } from '../hooks/useRecorder.js';
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
export declare const Recorder: React.FC<RecorderProps>;
export {};
