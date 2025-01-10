import { Outlet } from "react-router-dom"
import Navbar from "./ThunkComponent/Navbar"

const ReduxThunkMain = () => {
    return <>
        <div className="min-h-screen h-fit w-full bg-white">
            <div className="mb-20">
                <Navbar />
            </div>
            <Outlet />
        </div>
    </>
}
export default ReduxThunkMain