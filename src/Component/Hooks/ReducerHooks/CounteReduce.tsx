import { useReducer } from "react"
import CreateReducer from "./CreateReducer";

const CounterReduce:React.FC = () => {
    let initialState:number  = 0;
    const [count, dispatch] = useReducer(CreateReducer, initialState);

    return <>
        <div className="flex flex-col gap-4">
            <h1 className="text-center">{count}</h1>
            <div className="flex flex-wrap justify-center items-center gap-4">
                <button onClick={()=>dispatch("increment")} className="border-2 border-gray-500 rounded-lg px-3 py-1 active:bg-gray-500 active:text-white">Increment</button>
                <button onClick={()=>dispatch("decrement")} className="border-2 border-gray-500 rounded-lg px-3 py-1 active:bg-gray-500 active:text-white" >Decrement</button>
                <button onClick={()=>dispatch("reset")} className="border-2 border-gray-500 rounded-lg px-3 py-1 active:bg-gray-500 active:text-white" >Reset</button>
            </div>
        </div>
    </>
}
export default CounterReduce