type OptionEvent = {
    OptionValue: string;
    HandleOption: (e: React.ChangeEvent<HTMLSelectElement>) => void
}
const SelectOptions: React.FC<OptionEvent> = ({ OptionValue, HandleOption }) => {
    return <>
        <div>
            <select className="cursor-pointer border-2 border-gray-400 px-4 w-72 sm:w-80 py-2 md:py-3" value={OptionValue} onChange={HandleOption}>
                <option value="genral">Genral</option>
                <option value="random">Random</option>
                <option value="travel">Travel</option>
                <option value="music">Music</option>
            </select>
        </div>
    </>
}
export default SelectOptions;

