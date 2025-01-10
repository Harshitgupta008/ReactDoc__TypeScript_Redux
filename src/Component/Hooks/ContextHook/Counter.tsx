import { useContext } from "react";
import { CounterContext } from "./CounterContextHooks";


const Counter: React.FC = () => {

    const { count, Increment, Decrement, ResetCount }:any = useContext(CounterContext);

    return <div className="flex flex-col gap-4">
        <div className="w-full flex justify-center items-center">Count : {count}</div>
        <div className="flex  gap-4 flex-wrap">
            <button className="border-2 active:bg-gray-400 active:text-white px-3 py1 border-gray-400 rounded-md" onClick={Increment}>Increment</button>
            <button className="border-2 active:bg-gray-400 active:text-white px-3 py1 border-gray-400 rounded-md" onClick={Decrement}>Decrement</button>
            <button className="border-2 active:bg-gray-400 active:text-white px-3 py1 border-gray-400 rounded-md" onClick={ResetCount}>Reset</button>
        </div>
    </div>
}
export default Counter;