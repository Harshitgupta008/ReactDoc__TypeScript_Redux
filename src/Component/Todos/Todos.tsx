import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Todolist from "./TodoList";

interface InputText {
    id: number;
    text: string;
    complete: boolean;
}
const Todos: React.FC = () => {
    const [inputText, setInputText] = useState<string>("");
    const [inputList, setInputList] = useState<InputText[]>([]);
    const [filter, setFilter] = useState<string>("all");
    const [filterList, setFilterList] = useState<InputText[]>([]);
    const [searchList, setSearchList] = useState<string>("");

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    }
    const SubmitText = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (inputText.trim()) {
            setInputList(prevList => [ { id: new Date().getTime(), text: inputText, complete: false }, ...prevList]);
            return setInputText("");
        } else {
            return alert("Please Enter your Input");
        }
    }

    const handleCheckBox = (id: number) => {
        setInputList(prev => prev.map(item => item.id === id
            ?
            { ...item, complete: !item.complete } : item
        ))
    }

    const DeleteInput = (id: number) => {

        setInputList((prevList) => {
            return prevList.filter((item) => item.id !== id)
        })
    }

    const UpdateInput = (id: number, text: string) => {
        if(!text.trim()) return alert("enter value")
        const todoItem = inputList.find(item => item.id === id);
        if (todoItem) {
            setInputList(prevList =>
                prevList.map(item =>
                    item.id === id ? { ...item, text } : item
                )
            );
        }
    }

    const HandleFilter = (filteType: string) => {
        setFilter(filteType);
    }

    useEffect(() => {
        const filteredList = inputList.filter(item => {
            if (filter === "all") return true;
            if (filter === "active") return !item.complete;
            if (filter === "complete") return item.complete;
        });

        const filteredProducts = searchList
            ? filteredList.filter(product => product.text.toLowerCase().includes(searchList.toLowerCase()))
            : filteredList;

        setFilterList(filteredProducts);
    }, [inputList, filter, searchList]);


    return (
        <>
            <div className='bg-gray-300 min-h-screen h-fit w-full items-center py-6 flex flex-col gap-8'>
                <h1 className="text-black font-bold text-lg md:text-xl lg:text-2xl mb-5"> Todos </h1>

                <div className="flex flex-col md:flex-row  gap-6  ">
                    <SearchBar inputText={inputText} handleInput={handleInput} SubmitText={SubmitText} />
                    {
                        inputList.length === 0 ? "" :
                            <input value={searchList} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchList(e.target.value)} type="text" placeholder="Search...." className="rounded-full text-black px-4 w-full  md:w-72 lg:w-80 xl:w-96 py-2 md:py-3" />
                    }
                </div>
                {
                    inputList.length === 0 ? <h1>Empty Data</h1>
                        :
                        <>
                            <div>
                                <ul className="flex gap-6">
                                    <li onClick={() => HandleFilter("all")} className={`cursor-pointer font-bold ${filter === "all" ? "text-red-600 underline" : "text-black"}`}>List</li>
                                    <li onClick={() => HandleFilter("active")} className={`cursor-pointer font-bold ${filter === "active" ? "text-red-600 underline" : "text-black"}`}>Active</li>
                                    <li onClick={() => HandleFilter("complete")} className={`cursor-pointer font-bold ${filter === "complete" ? "text-red-600 underline" : "text-black"}`}>Completed</li>

                                </ul>
                            </div>
                            <Todolist handleCheckBox={handleCheckBox} deleteInput={DeleteInput} UpdateInput={UpdateInput} inputList={filterList} />
                        </>
                }
            </div>
        </>
    )
}

export default Todos;