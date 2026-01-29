import { default as React } from 'react';
import { eventWithTime } from '@rrweb/types';

import * as rrweb from 'rrweb';
export declare function usePlayer(events: eventWithTime[]): {
    containerRef: React.RefObject<HTMLDivElement>;
    replayer: rrweb.Replayer | null;
    status: {
        isPlaying: boolean;
        currentTime: number;
        totalTime: number;
        progress: number;
        speed: number;
    };
    controls: {
        seekToProgress: (percent: number) => void;
        play: () => void;
        pause: () => void;
        reset: () => void;
        seek: (timeMs: number) => void;
        setSpeed: (newSpeed: number) => void;
    };
};
