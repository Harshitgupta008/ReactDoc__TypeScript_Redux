import { useState } from "react"
import NavButton from "./NavButton"
import UserData from "./UserData/UserData";

const ReduxAndReduxToolkit: React.FC = () => {
    const [filterName, setFilterName] = useState<string>("UserData");

    const ButtonStatus = (name: string) => {
        setFilterName(name);
    }
    return <div className='bg-white min-h-screen h-fit w-full flex flex-col items-center gap-6'>

        <h1 className="text-2xl font-bold py-5 ">Redux Toolkit</h1>

        <div className="flex items-center justify-center gap-6">
            <NavButton ButtonStatus={ButtonStatus} name="UserData" filterName={filterName} />
            <NavButton ButtonStatus={ButtonStatus} name="FetchApi" filterName={filterName} />
        </div>


        {filterName === "UserData" && <UserData />}


    </div>
}
export default ReduxAndReduxToolkit