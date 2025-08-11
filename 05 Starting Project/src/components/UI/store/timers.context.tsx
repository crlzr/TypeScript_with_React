import { type ReactNode, createContext, useContext } from "react";

// single timer
type Timer = {
    name: string;
    duration: number;
};

// multiple timers
type TimersState = {
    isRunning: boolean;
    timers: Timer[]
};

// methods to run with the timers
type TimersContextValue = TimersState & {
    addTimer: (timerData: Timer) => void,
    startTimers: () => void,
    stopTimers: () => void
};

const TimersContext = createContext<TimersContextValue | null>  (null);

export function useTimersContext() {
    const timersCtx = useContext(TimersContext)

    if (timersCtx === null) {
        throw new Error('TimersContext is null')
    }

    return timersCtx;
}

type TimersContextProvidersProps = {
    children: ReactNode;
}

export default function TimersContextProvider({children}: TimersContextProvidersProps) {

    const ctx: TimersContextValue = {
        timers: [],
        isRunning: false,
        addTimer(timerData) {
            //...
        },
        startTimers() {
            //...
        },
        stopTimers() {
            //...
        }

    }
    return <TimersContext.Provider value= {ctx}>{children}</TimersContext.Provider>
}