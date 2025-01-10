
interface SearchInput {
    inputText: string;
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void
    SubmitText: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const SearchBar: React.FC<SearchInput> = ({ inputText, handleInput, SubmitText }) => {
    return <>
        <div className="flex">
            <input value={inputText} onChange={handleInput} type="text" placeholder="Your todo..." className="outline-gray-400 rounded-l-full text-black px-4 w-44 sm:w-72 lg:w-80 xl:w-96 py-2 md:py-3" />

            <button onClick={SubmitText} className="bg-white text-black font-normal sm:font-medium  w-20 rounded-r-full h-full py-2 md:py-3 lg:w-28">Add</button>

        </div>
    </>
}

export default SearchBar;