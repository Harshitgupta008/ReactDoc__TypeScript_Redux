import CustomHooks from "./CustomHooks/CustomHooks";
import CounterContextHooks from "./ContextHook/CounterContextHooks";
import ThemeContext from "./ContextHook/ThemeContext";
import ContextHook from "./ContextHook/ContextHooks";
import EffectHooks from "./EffectHooks/EffectHooks";
import ReducerHooks from "./ReducerHooks/ReducerHooks";
import RefHooks from "./RefHooks/RefHooks";
import StateHooks from "./StateHook/StateHooks";

const Hooks: React.FC = () => {
    return <>
        <div className='bg-gray-300 min-h-screen h-fit pb-6 w-full flex flex-col  pt-10 items-center gap-6'>
            <h1 className="text-black text-xl font-bold">Hooks With TypeScript</h1>

            <StateHooks />
            <EffectHooks />

            {/* start useContext using child */}
            <ThemeContext>
                <CounterContextHooks>
                    <ContextHook /> {/* this is main component it access all context */}
                </CounterContextHooks>
            </ThemeContext>

            <RefHooks />
            <ReducerHooks />

            <CustomHooks />
        </div>
    </>
}
export default Hooks;