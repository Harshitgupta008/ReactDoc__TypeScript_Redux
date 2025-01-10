import InputFocus from "./InputFocus";
import StopWatch from "./StopWatch";

const UseRefHooks = () => {
    return <div className="flex relative w-96 h-fit flex-col gap-4 items-center px-3 py-6 rounded-lg shadow-xl bg-white">
        <h1 className="text-black text-lg text-center font-bold mb-5"> <u>Use Ref Hooks</u></h1>
        <StopWatch />
        <InputFocus />
    </div>
}
export default UseRefHooks;