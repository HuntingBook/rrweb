import React from 'react';
import { usePlayer } from '../../hooks/usePlayer';
import { eventWithTime } from '@rrweb/types';
import { ControlBar } from './ControlBar';
import { TimeDisplay } from './TimeDisplay';

interface ReplaySectionProps {
    events: eventWithTime[];
}

export const ReplaySection: React.FC<ReplaySectionProps> = ({ events }) => {
    const { containerRef, controls, status } = usePlayer(events);

    return (
        <section className="card section-replay">
            <div className="section-header">
                <h2>2. 回放区域</h2>
                <p className="subtitle">录制的内容将在此处回放。</p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <ControlBar
                    isPlaying={status.isPlaying}
                    speed={status.speed}
                    actions={controls}
                />
                <TimeDisplay
                    currentTime={status.currentTime}
                    totalTime={status.totalTime}
                />
            </div>

            <div className="player-viewport-wrapper">
                <div
                    ref={containerRef}
                    className="rrweb-player-container"
                    style={{
                        width: '100%',
                        height: '500px',
                        transformOrigin: 'top left',
                        textAlign: 'left'
                    }}
                />
            </div>
        </section>
    );
};
