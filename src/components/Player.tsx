import React from 'react';
import { usePlayer } from '../hooks/usePlayer.js';
import { eventWithTime } from '@rrweb/types';

interface PlayerProps {
    events: eventWithTime[];
    width?: number;
    height?: number;
    showControls?: boolean;
}

export const Player: React.FC<PlayerProps> = ({ events, width, height, showControls = true }) => {
    const { containerRef, controls, status } = usePlayer(events);

    return (
        <div className="rrweb-player-wrapper">
            <div ref={containerRef} className="rrweb-player-container" style={{ width, height }} />
            {showControls && (
                <div className="rrweb-player-controls" style={{ marginTop: '8px', display: 'flex', gap: '8px' }}>
                    <button onClick={status.isPlaying ? controls.pause : controls.play}>
                        {status.isPlaying ? 'Pause' : 'Play'}
                    </button>
                    <button onClick={controls.reset}>Reset</button>
                    <span>{status.currentTime.toFixed(1)}ms / {status.totalTime.toFixed(1)}ms</span>
                </div>
            )}
        </div>
    );
};
