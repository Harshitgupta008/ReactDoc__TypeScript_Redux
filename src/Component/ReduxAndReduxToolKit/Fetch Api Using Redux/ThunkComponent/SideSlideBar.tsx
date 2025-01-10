import { useSelector } from "react-redux";

interface SlideCategoryType {

    dataCategory: Set<string>;
    setCategoryStatus: (category: string) => void;
    categorieStatus: string;
}
const SideSlideBar: React.FC<SlideCategoryType> = ({ dataCategory, setCategoryStatus, categorieStatus }) => {
    const slidestatus = useSelector((state: any) => state.slider.slidestatus);

    return <div className={`${slidestatus ? "block" : "hidden sm:block sm:pt-20"} z-10  h-screen w-48 pt-20 sm:pt-0  bg-blue-100 fixed sm:sticky top-0 left-0 bottom-0`}>

        <div className="flex w-full pt-20 flex-col   justify-center items-center gap-6">
            <h1 className="font-bold text-lg">Category</h1>
            <ul className="flex  w-full justify-center items-center flex-col gap-3">
                <li onClick={() => setCategoryStatus("all")} className={`cursor-pointer py-2  flex  w-full justify-center items-center hover:bg-blue-200 font-semibold ${categorieStatus === "all" ? "text-orange-500 hover:text-orange-700" : "hover:text-blue-500 text-black"}`}>All</li>
                {
                    [...dataCategory].map((category, i) => (
                        <li key={i} onClick={() => setCategoryStatus(category)} className={`cursor-pointer py-2  flex  w-full justify-center items-center hover:bg-blue-200 font-semibold ${categorieStatus === category ? "text-orange-500 hover:text-orange-700" : "hover:text-blue-500 text-black"}`}>{category.slice(0, 1).toLocaleUpperCase() + category.slice(1, category.length)}</li>
                    ))
                }
            </ul>
        </div>
    </div>
}
export default SideSlideBar