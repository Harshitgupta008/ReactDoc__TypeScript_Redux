import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../Loader";

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
const UserDetail = () => {
    const [userData, setUserData] = useState<todostype>()
    const todos = useSelector((state: { todo: todoState }) => state.todo.todo);
    const { userid } = useParams();
    useEffect(() => {
        const UserDetail = todos.find(todos => todos.id === userid);
        if (UserDetail) {
            setUserData(UserDetail);
        }
    }, [userid, todos])

    if (!userData) {
        return <Loader />
    }
    return <div className="h-screen w-full bg-gray-400 flex justify-center items-center px-4">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
            <table className="min-w-full table-auto ">
                <tbody>
                    <tr className="border-b">
                        <th className="text-left font-medium text-gray-700 p-2">Name :</th>
                        <td className="text-gray-900 p-2">{userData.name}</td>
                    </tr>
                    <tr className="border-b">
                        <th className="text-left font-medium text-gray-700 p-2">Email :</th>
                        <td className="text-gray-900 p-2">{userData.email}</td>
                    </tr>
                    <tr className="border-b">
                        <th className="text-left font-medium text-gray-700 p-2">Number :</th>
                        <td className="text-gray-900 p-2">{userData.number}</td>
                    </tr>
                    <tr>
                        <th className="text-left font-medium text-gray-700 p-2">Place :</th>
                        <td className="text-gray-900 p-2">{userData.place}</td>
                    </tr>
                    <tr>
                        <th className="text-left font-medium text-gray-700 p-2">About :</th>
                        <td className="text-gray-900 p-2">{userData.about}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

}
export default UserDetail;