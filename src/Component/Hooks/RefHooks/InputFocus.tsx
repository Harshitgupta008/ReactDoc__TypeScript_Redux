import { useRef, useState } from "react";

const InputFocus: React.FC = () => {
    const [textInput, setTextInput] = useState<string>("abc");
    const FocusRef = useRef<any>(null);

    const HandleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTextInput(e.target.value);
    }
    const FocusOn = () => {
        FocusRef.current.focus();
    }
    const FocusOff = () => {
        FocusRef.current.blur();
    }
    const ClearInput = () => {
        setTextInput("");
    }
    const RemoveInput = () => {
        FocusRef.current.remove();
    }
    return <>
        <div className="flex flex-col gap-4">
            <div className="flex justify-center">
                <input ref={FocusRef} type="text" value={textInput} placeholder="Click button for direct Focus " onChange={HandleInput} className="outline-black outline-8 border-2 border-gray-400 rounded-xl text-black px-4 w-72 sm:w-80  py-2 md:py-3" />
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4">
                <button className="border-2 border-gray-500 rounded-lg px-3 py-1 active:bg-gray-500 active:text-white" onClick={FocusOn}>Focus on</button>
                <button className="border-2 border-gray-500 rounded-lg px-3 py-1 active:bg-gray-500 active:text-white" onClick={FocusOff}>Remove Focus</button>
                <button className="border-2 border-gray-500 rounded-lg px-3 py-1 active:bg-gray-500 active:text-white" onClick={ClearInput}>Clear Input</button>
            </div>
            <button className="border-2 border-gray-500 rounded-lg px-3 py-1 active:bg-gray-500 active:text-white" onClick={RemoveInput}>Remove Input</button>
        </div>
    </>
}
export default InputFocus;