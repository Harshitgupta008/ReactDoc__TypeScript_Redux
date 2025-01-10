import { useContext } from "react";
import Counter from "./Counter";
import { CreateThemeContext } from "./ThemeContext";


const UseContextHook: React.FC = () => {
    const { theme, ToggleTheme }: any = useContext(CreateThemeContext)

    return <>
        <div className={`flex w-96 relative  h-fit flex-col gap-4 items-center px-3 py-6 rounded-lg shadow-xl  ${theme === 'light' ? "bg-white text-black" : "bg-black text-white shadow-white"}`}>
            <h1 className=" text-lg text-center font-bold mb-5"> <u>Use Context Hooks</u></h1>
            <Counter />
            <button onClick={ToggleTheme} className="border-2 border-gray-400 px-3 py-1 rounded-lg active:bg-gray-400 active:text-white">Toggle Theme</button>
        </div>
    </>
}
export default UseContextHook;