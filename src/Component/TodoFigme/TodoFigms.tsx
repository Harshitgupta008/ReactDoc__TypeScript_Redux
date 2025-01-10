import { ContextProvider } from "./ContextProvider/ContextProvider";
import TodoLayout from "./TodoLayout";

const TodoFigma = () => {
    return <>
        <div className='bg-gray-300 min-h-screen h-fit w-full flex flex-col items-center gap-6'>
            <ContextProvider>
                <TodoLayout />
            </ContextProvider>
        </div>
    </>
}
export default TodoFigma;