
import FormTodo from "./FormTodo";

interface modleType {
    HideModle: () => void;
}
const AddModle: React.FC<modleType> = ({ HideModle }) => {

    const RemoveModle = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;
        if (target.id === "container" || target.id === "buttonModle") HideModle();
    }

    return (
        <>
            <div id="container" onClick={RemoveModle} className=" absolute inset-0 w-full flex justify-center items-center h-screen bg-gray-300 bg-opacity-30 backdrop-blur-sm">
                <div className="bg-white rounded-lg h-fit flex flex-col gap-2 shadow-xl  w-80 px-3 py-4">
                    <h1 className="font-bold text-lg">Add Todo</h1>
                    <FormTodo HideModle={HideModle} />
                </div>
            </div>
        </>
    )
}
export default AddModle;