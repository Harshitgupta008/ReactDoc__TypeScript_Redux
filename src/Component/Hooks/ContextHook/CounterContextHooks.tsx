import { createContext, ReactNode, useState } from "react"

interface CounterContextType {
    count: number;
    Increment: () => void;
    Decrement: () => void;
    ResetCount: () => void;
}

export const CounterContext = createContext<CounterContextType | undefined>(undefined);

interface CounterHooksProps {
    children: ReactNode;
}

const CounterContextHooks: React.FC<CounterHooksProps> = ({ children }) => {

    const [count, setCount] = useState<number>(0);

    const Increment = () => {
        setCount(count + 1);
    }
    const Decrement = () => {
        setCount(count - 1);
    }
    const ResetCount = () => {
        setCount(0);
    }

    return <CounterContext.Provider value={{count, Increment, Decrement, ResetCount}}>
        {children}
    </CounterContext.Provider>
}
export default CounterContextHooks;