import { Link } from "react-router-dom";

interface LinkProps {
    title: string;
    routepath: string
}

const HomeButton: React.FC<LinkProps> = ({ title, routepath }) => {
    return <Link to={routepath} className="bg-white   w-2/3 md:w-1/2 text-center hover:scale-105 transition-all delay-75 ease-in-out px-4 py-2 cursor-pointer font-bold rounded-3xl">{title}</Link>
}

export default HomeButton;