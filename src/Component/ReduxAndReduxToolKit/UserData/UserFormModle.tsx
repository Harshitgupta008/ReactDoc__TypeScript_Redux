import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTodo } from "../Redux/feature/TodoFeature/todoSlice";


interface UserType {
    name: string;
    number: any;
    email: string;
    place: string;
    about: string;
}

interface UserModleType {
    HandleFormModle: () => void;
}

const UserFormModle: React.FC<UserModleType> = ({ HandleFormModle }) => {
    const [user, setUser] = useState<UserType>({ name: "", email: "", number: "", place: "", about: "", })

    const dispatch = useDispatch();

    const HandleUserInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }))
    }

    const SubmitUser = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const { name, email, number, place, about } = user;
        if (!name || !email || !number || !place || !about) {
            return alert("All field are mandatory");
        }
        const response = dispatch(AddTodo(user));
        if (response) {
            alert("User data submitted")
            return HandleFormModle();
        } else {
            alert("Error")
        }
    }
    return <div className="w-full flex justify-center items-center h-fit px-5 py-4">
        <form className="flex flex-col w-full px-5 lg:w-3/4  sm:w-full justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
                <div className="flex flex-col gap-2">
                    <label className="text-gray-500" htmlFor="name">Name <span className="text-red-500">*</span></label>
                    <input type="text" onChange={HandleUserInput} placeholder="Enter Your Name" value={user.name} name="name" className="border-2 border-gray-400 rounded-lg px-4 py-2 w-full" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-gray-500" htmlFor="email">Email <span className="text-red-500">*</span></label>
                    <input type="email" id="email" onChange={HandleUserInput} placeholder="Enter Your Email" value={user.email} name="email" className="border-2 border-gray-400 rounded-lg px-4 py-2 w-full" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-gray-500" htmlFor="place">Place <span className="text-red-500">*</span></label>
                    <input type="text" id="place" onChange={HandleUserInput} placeholder="Enter Your Place" value={user.place} name="place" className="border-2 border-gray-400 rounded-lg px-4 py-2 w-full" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-gray-500" htmlFor="number">Phone Number <span className="text-red-500">*</span></label>
                    <input type="number" id="number" value={user.number} name="number" onChange={HandleUserInput} placeholder="Enter Your Phone Number" className="border-2 border-gray-400 rounded-lg px-4 py-2 w-full" />
                </div>
            </div>
            <div className="flex flex-col w-full mt-4 gap-2">
                <label className="text-gray-500" htmlFor="about">About <span className="text-red-500">*</span></label>
                <textarea id="about" value={user.about} name="about" onChange={HandleUserInput} className="w-full border-2 border-gray-400 px-4 py-2 rounded-lg resize-none h-40" placeholder="Tell us more about yourself"></textarea>
            </div>
            <button onClick={SubmitUser} className="w-full py-2 bg-slate-500 mt-5 rounded-full text-white">Submit User</button>
        </form>
    </div>


}
export default UserFormModle;