import { useState } from "react";
import AddButton from "./AddButton";
import AddModle from "./AddModle";
import ListTodo from "./ListTodo";

const TodoLayout: React.FC = () => {
    const [modle, setModle] = useState<boolean>(false);

    const HideModle = () => {
        setModle(false);
    }

    return (
        <>
            <div className="min-h-screen w-96 relative bg-white">
                <AddButton ShowModle={() => setModle(true)} />
                <ListTodo />
                {modle && <AddModle HideModle={HideModle} />}
            </div>
        </>
    )
}
export default TodoLayout;