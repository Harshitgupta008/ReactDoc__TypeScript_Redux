import { useState } from "react";
import SelectOptions from "./SelectOptions";
import Chat from "./SearchChat/Chat";

const UseEffectHooks: React.FC = () => {
    const [OptionValue, setOptionValue] = useState<string>("genral");
    const [IsOpenChat, setIsOpenChat] = useState<boolean>(false);
    const HandleOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setOptionValue(e.target.value)
    }

    const ActionChat = () => {
        IsOpenChat ? setIsOpenChat(false) : setIsOpenChat(true)
    }
    return <>
        <div className="flex w-96 relative h-fit flex-col gap-4 items-center px-3 py-6 rounded-lg shadow-xl bg-white">

            <h1 className="text-black text-lg text-center font-bold mb-5"> <u>Use Effect</u></h1>
            <SelectOptions HandleOption={HandleOption} OptionValue={OptionValue} />
            <button onClick={ActionChat} className="px-4 py-1 border-2 border-gray-400 rounded-xl">
                {!IsOpenChat ? "Open Chat" : "Close Chat"}
            </button>
            {
                IsOpenChat &&
                <>
                    <h1 className="text-black text-lg text-center font-bold mb-5">Welcome to the {OptionValue} room</h1>
                    <Chat roomId={OptionValue} />
                </>
            }

        </div>
    </>
}
export default UseEffectHooks;