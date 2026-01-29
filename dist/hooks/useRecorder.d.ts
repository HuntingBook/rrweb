import { eventWithTime } from '@rrweb/types';

export interface UseRecorderOptions {
    emit?: (event: eventWithTime) => void;
}
export declare function useRecorder(options?: UseRecorderOptions): {
    isRecording: boolean;
    events: eventWithTime[];
    startRecording: () => void;
    stopRecording: () => void;
    clearEvents: () => void;
    getRecordingDuration: () => number;
};
