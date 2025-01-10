interface AddButtonType {
    ShowModle: () => void
}

const AddButton: React.FC<AddButtonType> = ({ ShowModle }) => {
    return <div className="w-full flex justify-between px-3 py-2 mt-3 h-16 items-center">
        <h1 className="font-bold text-3xl">Today</h1>
        <div onClick={ShowModle} className="border-2 cursor-pointer hover:border-red-500 hover:text-red-500 text-blue-700 border-blue-500 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        </div>
    </div>
}

export default AddButton;