import React from 'react';

interface TimeDisplayProps {
    currentTime: number;
    totalTime: number;
}

export const TimeDisplay: React.FC<TimeDisplayProps> = ({ currentTime, totalTime }) => {
    return (
        <div className="time-display">
            {(currentTime / 1000).toFixed(1)}s / {(totalTime / 1000).toFixed(1)}s
        </div>
    );
};
