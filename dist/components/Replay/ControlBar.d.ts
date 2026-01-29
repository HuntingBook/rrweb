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
export declare const ControlBar: import('react').MemoExoticComponent<({ isPlaying, speed, actions }: ControlBarProps) => import("react/jsx-runtime").JSX.Element>;
export {};
