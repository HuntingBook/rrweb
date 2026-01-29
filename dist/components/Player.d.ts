import { default as React } from 'react';
import { eventWithTime } from '@rrweb/types';

interface PlayerProps {
    events: eventWithTime[];
    width?: number;
    height?: number;
    showControls?: boolean;
}
export declare const Player: React.FC<PlayerProps>;
export {};
