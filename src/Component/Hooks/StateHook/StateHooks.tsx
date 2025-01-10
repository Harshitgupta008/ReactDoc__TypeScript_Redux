import { useState } from "react";
import SearchInputs from "./SearchInpus";
import AddButton from "./AddButton";

const UseStateHooks = () => {
    const [TextInput, setInputText] = useState<string>("");
    const [Count, setCount] = useState<number>(0);
    const HandleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    }

    const AddNum = (n: number) => {
        setCount(Count + n)
    }
    const ResetCount = () => {
        setCount(0);
    }
    return <>
        <div className="flex w-96 flex-col gap-4 items-center px-3 py-6 rounded-lg shadow-xl bg-white">
            <h1 className="text-black text-lg text-center font-bold mb-5"> <u>Use State</u></h1>
            <SearchInputs TextInput={TextInput} HandleInput={HandleInput} />
            {TextInput && <h1 className="text-black font-bold ">User Search : <span className="text-red-500">{TextInput}</span></h1>}
            <div className="flex flex-col gap-5">
                <h1 className="text-center font-bold">{Count}</h1>
                <AddButton ResetCount={ResetCount} AddNum={AddNum} />
            </div>

        </div>

    </>
}
export default UseStateHooks;