import DeleteUpdateButt from "./DeleteUpdateButt";
import { UseTodo } from "./ContextProvider/ContextProvider";
import { useState } from "react";
import alarmImg from "./img/alarmimage.png"
interface todoType {
    id: string;
    text: string,
    complete: boolean
}
const ListTodo: React.FC = () => {
    const { TodoList, setTodoList } = UseTodo();

    const [inputText, setInputText] = useState<{ [key: string]: string }>(
        TodoList.reduce((acc: any, todo: any) => {
            acc[todo.id] = "";
            return acc;
        }, {} as { [key: string]: string }));

    const [IsUpdate, setIsUpdate] = useState<{ [key: string]: boolean }>(
        TodoList.reduce((acc: any, todo: any) => {
            acc[todo.id] = false;
            return acc;
        }, {} as { [key: string]: boolean }));



    const handleCheck = (textId: string) => {
        setTodoList((prev: any) => prev.map((item: any) => item.id === textId ? { ...item, complete: !item.complete } : item))
    }

    const UpdateInput = (id: string) => {
        const text: string = inputText[id];
        if (!text.trim()) return alert("enter value")
        const todoItem = TodoList.find((item: todoType) => item.id === id);
        if (todoItem) {
            setTodoList((prevList: any) =>
                prevList.map((item: todoType) =>
                    item.id === id ? { ...item, text } : item
                )
            );
            setIsUpdate((prevState) => ({
                ...prevState,
                [id]: false,
            }));
        }
    }
    const UpdateText = (textId: string) => {
        setIsUpdate((prevState) => ({
            ...prevState,
            [textId]: true,
        }));

    }

    const HandleInput = (textId: string, e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText((prev) => ({
            ...prev,
            [textId]: e.target.value,
        }));
    }

    return <>
        <div className="flex flex-col gap-4 mt-2">
            {
                TodoList.map((item: todoType) => {
                    return <div key={item.id} className="border-b-[2px]  px-3 py-3 flex flex-col justify-center border-b-gray-300">
                        <div className="flex justify-between items-center  ">
                            <div className="flex gap-3 items-center w-72 ">
                                {
                                    IsUpdate[item.id] ? "" :
                                        <>
                                            {
                                                item.complete ?
                                                    <label htmlFor={item.id} className="w-7 h-7 border-white border-2 bg-blue-600 rounded-full cursor-pointer"></label>
                                                    :
                                                    <label htmlFor={item.id} className="w-7 h-7 border-gray-400 border-2 rounded-full cursor-pointer"></label>

                                            }
                                            <input type="checkbox" id={item.id} className="h-6 w-6 hidden cursor-pointer" checked={item.complete} onChange={() => handleCheck(item.id)} />
                                        </>
                                }
                                {
                                    item.complete ?

                                        <h1 className="text-lg text-red-600 font-medium line-through">{item.text}</h1>

                                        :
                                        <>

                                            {
                                                IsUpdate[item.id] ? <input type="text" className="h-6 w-full border-b-2 border-b-black outline-none" value={inputText[item.id] || item.text} onChange={(e) => HandleInput(item.id, e)} />
                                                    :
                                                    <h1 className="text-lg font-medium">{item.text}</h1>
                                            }
                                        </>
                                }

                            </div>
                            <div>
                                {
                                    item.complete ?
                                        <div className="h-4 w-4 bg-orange-600 rounded-full"></div>
                                        :
                                        <>
                                            {
                                                IsUpdate[item.id] ? <button onClick={() => UpdateInput(item.id)} className="bg-green-400 text-white px-3 py-1 ">Update</button> :
                                                    <DeleteUpdateButt UpdateText={UpdateText} textid={item.id} />
                                            }
                                        </>
                                }

                            </div>
                        </div>
                        {
                            IsUpdate[item.id] ? "" :
                                <div className="px-8 flex gap-2 justify-start items-center">
                                    <img src={alarmImg} alt="" className="h-4 w-4" />
                                    <h1 className=" text-gray-400">{item.id.slice(9, item.id.length - 6) + "" + item.id.slice(17, item.id.length)}</h1>
                                </div>
                        }
                    </div>
                })
            }

        </div>
    </>
}
export default ListTodo;