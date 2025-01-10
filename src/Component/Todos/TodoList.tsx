import { useState } from "react";

interface Todos {
    text: string;
    id: number
    complete: boolean;
}
interface TodoInputList {

    inputList: Todos[];
    deleteInput: (id: number) => void;
    UpdateInput: (id: number, text: string) => void;
    handleCheckBox: (id: number) => void;
}

const Todolist: React.FC<TodoInputList> = ({ inputList, deleteInput, handleCheckBox, UpdateInput }) => {

    const [inputText, setInputText] = useState<{ [key: number]: string }>(
        inputList.reduce((acc, todo) => {
            acc[todo.id] = "";
            return acc;
        }, {} as { [key: number]: string }));

    const [IsUpdate, setIsUpdate] = useState<{ [key: number]: boolean }>(
        inputList.reduce((acc, todo) => {
            acc[todo.id] = false;
            return acc;
        }, {} as { [key: number]: boolean }));


    const HandleInputs = (id: number, e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText((prev) => ({
            ...prev,
            [id]: e.target.value,
        }));
    };
    const UpdateStatus = (id: number) => {
        setIsUpdate((prevState) => ({
            ...prevState,
            [id]: true,
        }));
    }
    const Update = (id: number) => {
        UpdateInput(id, inputText[id]);
        setIsUpdate((prevState) => ({
            ...prevState,
            [id]: false,
        }));
    }
    return <>
        <div className="w-full md:w-2/3 px-4 flex flex-col gap-5 max-h-96 py-4 overflow-y-auto ">
            {
                inputList.map((text) => {
                    return <div key={text.id} className="bg-white shadow-xl rounded-xl text-black flex items-center justify-between  px-3 py-3">
                        <div className="flex gap-3">
                            {
                                IsUpdate[text.id] ? "" :
                                    <input className="cursor-pointer" type="checkbox" checked={text.complete} onChange={() => handleCheckBox(text.id)} />
                            }
                            {
                                !text.complete ?
                                    <div >
                                        {
                                            IsUpdate[text.id] ?
                                                <input type="text" className="border-b-2 border-gray-500 outline-none" placeholder="Update..." value={inputText[text.id] || text.text || ""} onChange={(e) => HandleInputs(text.id, e)} />

                                                :
                                                <h2> {text.text}</h2>
                                        }
                                    </div>
                                    :
                                    <h2 className="text-red-600 line-through">{text.text}</h2>
                            }
                        </div>

                        {
                            !text.complete ?
                                <>
                                    {
                                        IsUpdate[text.id] ? <button className="rounded-lg px-3 py-1 border-2 bg-green-500 text-white" onClick={() => Update(text.id)}>Update</button> :
                                            <div className="flex flex-wrap gap-3">
                                                <svg onClick={() => UpdateStatus(text.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 cursor-pointer text-green-400 hover:text-green-600">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                                </svg>
                                                <svg onClick={() => deleteInput(text.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 cursor-pointer text-red-400 hover:text-red-700">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                </svg>
                                            </div>
                                    }
                                </>
                                :
                                <div><h1 className="bg-gray-700 px-2 rounded-lg text-sm text-white">Complete</h1></div>
                        }
                    </div>

                })
            }
        </div >
    </>
}
export default Todolist;