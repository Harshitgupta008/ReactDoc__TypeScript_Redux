
interface NavbuttonType {
    name: string;
    ButtonStatus: (name: string) => void;
    filterName : string;
}
const NavButton:React.FC<NavbuttonType> = ({ name, ButtonStatus, filterName }) => {
    return <button className={`border-b-2 border-transparent font-bold text-xl ${filterName === name ? "text-red-600 border-b-red-600" : "text-black"}`} onClick={() => ButtonStatus(name)}>{name}</button>
}
export default NavButton;