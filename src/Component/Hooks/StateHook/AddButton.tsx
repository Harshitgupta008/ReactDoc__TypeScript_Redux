type ButtonCount = {
    AddNum: (n: number) => void;
    ResetCount: () => void
}
const AddButton: React.FC<ButtonCount> = ({ AddNum, ResetCount }) => {

    return <>
        <div className="flex flex-wrap items-center justify-center gap-5">
            <button className="h-12 w-12 border-2 border-gray-400 active:bg-gray-400 active:text-white bg-white rounded-md shadow-lg" onClick={() => AddNum(5)}>5+</button>
            <button className="h-12 w-12 border-2 border-gray-400 active:bg-gray-400 active:text-white bg-white rounded-md shadow-lg" onClick={() => AddNum(10)}>10+</button>
            <button className="h-12 w-12 border-2 border-gray-400 active:bg-gray-400 active:text-white bg-white rounded-md shadow-lg" onClick={() => AddNum(1)}>1+</button>
            <button className="h-12 w-12 border-2 border-gray-400 active:bg-gray-400 active:text-white bg-white rounded-md shadow-lg" onClick={() => AddNum(3)}>3+</button>
            <button className="h-12 w-12 border-2 border-gray-400 active:bg-gray-400 active:text-white bg-white rounded-md shadow-lg" onClick={() => AddNum(-5)}>-5</button>
        </div>
        <div className="flex items-center justify-center mt-4">
            <button onClick={ResetCount} className="h-fit w-fit border-2 border-gray-400 px-4 py-1 active:bg-gray-400 active:text-white bg-white rounded-md shadow-lg">Reset Count</button>
        </div>
    </>
}
export default AddButton;