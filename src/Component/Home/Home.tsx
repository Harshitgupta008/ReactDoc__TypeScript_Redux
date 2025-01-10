import HomeButton from "./HomeButtons";

const Home: React.FC = () => {
    return (

        <div className='bg-gray-400 min-h-screen h-fit w-full flex flex-col justify-center items-center gap-6'>
            <h1 className="text-black font-bold text-lg md:text-xl lg:text-2xl mb-5">React js - TypeScript</h1>
            <HomeButton title="To Do" routepath="/todo" />
            <HomeButton title="Hooks" routepath="/hooks" />
            <HomeButton title="Todo From Fimga For Mobile" routepath="/todoFigma" />
            <HomeButton title="Redux" routepath="/Redux-toolkit" />
            <HomeButton title="Fetch Api Using Redux" routepath="/reduxthunkApi" />
            <HomeButton title="Empty Folder" routepath="/" />
        </div>
    )
}
export default Home;