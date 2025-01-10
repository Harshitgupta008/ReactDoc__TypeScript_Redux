import { useState } from "react";
import { UseTodo } from "./ContextProvider/ContextProvider";
interface FormTypeModle {
    HideModle: () => void;
}
interface NewtodoType {
    id: string;
    text: string,
    complete: boolean
}
const FormTodo: React.FC<FormTypeModle> = ({ HideModle }) => {
    const [textArea, setTextArea] = useState<string>("");

    const { setTodoList } = UseTodo();

    const AddTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newTodo: NewtodoType = {
            id: new Date().toLocaleString(),
            text: textArea,
            complete: false
        };

        setTodoList((Prev: NewtodoType[]) => [newTodo, ...Prev]);
        setTextArea("")
        HideModle();

    }
    return <>
        <form onSubmit={AddTodo}>
            <textarea placeholder="Add todo .." value={textArea} onChange={(e) => setTextArea(e.target.value)} className="w-full border-[1px] border-gray-200 px-2 py-2 outline-none h-44 rounded-lg" />
            <div className="flex  justify-between px-3 text-lg text-blue-500">
                <button onClick={HideModle}>Cancle</button>
                <button type="submit" id="done" className="font-medium">Done</button>
            </div>
        </form>
    </>
}
export default FormTodo;