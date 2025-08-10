import { createContext } from "react";

// single timer
type Timer = {
    name: string;
    duration: number;
};

// multiple timers
type TimersState = {
    isRuning: boolean;
    timers: Timer[]
};

// methods to run with the timers
type TimersContextValue = TimersState & {
    addTimer: (timerData: Timer) => void,
    startTimers: () => void,
    stopTimers: () => void
};

const TimersConext = createContext<TimersContextValue | null>  (null);
