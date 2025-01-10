import { useState } from "react"
interface CustomType {
    count: number;
    Increment: () => void;
    Decrement: () => void;
}
const useCounter = (): CustomType => {
    const [count, setCount] = useState(0);

    const Increment = () => {
        setCount(count + 1);
    }
    const Decrement = () => {
        setCount(count - 1);
    }

    return { count, Decrement, Increment };
}
export default useCounter;