import { memo } from 'react';

interface ControlBarProps {
    isPlaying: boolean;
    speed: number;
    actions: {
        play: () => void;
        pause: () => void;
        reset: () => void;
        setSpeed: (speed: number) => void;
    };
}

export const ControlBar = memo(({ isPlaying, speed, actions }: ControlBarProps) => {
    return (
        <div className="player-controls-bar">
            <button className="btn btn-primary" onClick={isPlaying ? actions.pause : actions.play}>
                {isPlaying ? '⏸️ 暂停' : '▶️ 播放'}
            </button>
            <button className="btn btn-secondary" onClick={actions.reset}>🔄 重置</button>
            <div className="speed-control">
                <span>倍速:</span>
                <select
                    className="select-input"
                    value={speed}
                    onChange={(e) => actions.setSpeed(Number(e.target.value))}
                >
                    <option value="1">1.0x</option>
                    <option value="2">2.0x</option>
                    <option value="4">4.0x</option>
                </select>
            </div>
            {/* TimeDisplay will be rendered separately to safely isolate updates */}
        </div>
    );
});
