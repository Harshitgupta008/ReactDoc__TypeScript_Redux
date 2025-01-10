import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RemoveTodo } from "../Redux/feature/TodoFeature/todoSlice";
import { useEffect } from "react";
interface todostype {
    id: String;
    name: string;
    email: string;
    number: number;
    place: string;
    about: string;
}

interface todoState {
    todo: todostype[];
}
const UserList: React.FC = () => {

    const todos = useSelector((state: { todo: todoState }) => state.todo.todo);
    const dispatch = useDispatch();

    const DeleteUser = (userid: string) => {
        dispatch(RemoveTodo(userid))
    }
    useEffect(()=>{
    },[todos])
    return <div className="flex flex-col justify-center items-center w-full h-fit">
        <div className="w-full px-5 lg:w-3/4 flex flex-col gap-8 sm:w-full">
            {
                todos.length === 0 ?

                    <h1 className="text-center">No User Data</h1>
                    :
                    todos.map((user: any) => {
                        return <div key={user.id} className="h-16 hover:scale-105 transition-all ease-in  shadow-lg rounded-2xl bg-slate-100 flex items-center justify-between px-5 w-full ">
                            <div>
                                <h1>{user.name}</h1>
                            </div>
                            <div className="flex gap-5">
                                <svg onClick={() => DeleteUser(user.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="cursor-pointer hover:text-red-700 text-red-500 size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                                <Link to={`/Redux-toolkit/user/${user.id}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="cursor-pointer hover:text-green-700  text-green-600 font-bold size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                </Link>

                            </div>
                        </div>
                    })
            }

        </div>
    </div>
}
export default UserList;