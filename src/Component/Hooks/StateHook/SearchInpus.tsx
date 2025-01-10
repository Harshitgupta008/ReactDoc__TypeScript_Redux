
type Inputs = {
    TextInput: string;
    HandleInput: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchInputs: React.FC<Inputs> = ({ TextInput, HandleInput }) => {
    return <>
        <div>
            <input type="text" value={TextInput} placeholder="Search..." onChange={HandleInput} className="outline-gray-400 border-2 border-gray-400 rounded-xl text-black px-4 w-72 sm:w-80 py-2 md:py-3" />
        </div>
    </>
}
export default SearchInputs;