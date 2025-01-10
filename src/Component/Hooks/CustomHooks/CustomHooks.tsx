import useCounter from "./useCounter";

const CustomHooks: React.FC = () => {
    const {count, Increment, Decrement} = useCounter();
    return <>
        <div className="flex w-96 relative h-fit flex-col gap-4 items-center px-3 py-6 rounded-lg shadow-xl bg-white">
            <h1 className="text-black text-lg text-center font-bold mb-5"> <u>Custom Hooks</u></h1>
            <div className="w-full flex justify-center items-center">Count : {count}</div>
            <div className="flex  gap-4 flex-wrap">
                <button onClick={Increment} className="border-2 active:bg-gray-400 active:text-white px-3 py1 border-gray-400 rounded-md" >Increment</button>
                <button onClick={Decrement} className="border-2 active:bg-gray-400 active:text-white px-3 py1 border-gray-400 rounded-md" >Decrement</button>
            </div>
        </div>
    </>
}
export default CustomHooks;