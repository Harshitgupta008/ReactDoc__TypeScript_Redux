import { useRef, useState } from "react";

const StopWatch: React.FC = () => {

    const intervalRef = useRef<any | null>(null);
    const [StartTime, setStartTime] = useState<number | null>(null)
    const [now, setNow] = useState<number | null>(null);

    const handleStart = () => {
        setStartTime(Date.now());
        setNow(Date.now());
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    }
    const handleStop = () => {
        clearInterval(intervalRef.current);
    }
    const RemoveStopWatch = () => {
        intervalRef.current = null;
        setStartTime(null);
    }

    let secondPassed: number = 0;
    if (StartTime != null && now != null) {
        secondPassed = (now - StartTime) / 1000;
    }

    return <div className="flex flex-col gap-5 ">
        <div className="flex justify-center items-center py-2 border-2 border-gray-500 shadow-inner shadow-gray-500 rounded-full">
            <h1>{secondPassed}</h1>
        </div>
        <div className="flex flex-wrap gap-4">
            <button onClick={handleStart} className="bg-green-500 text-white h-20 shadow-lg shadow-green-400 w-20 rounded-full">Start</button>
            <button onClick={handleStop} className="bg-red-500 text-white h-20 shadow-lg shadow-red-400 w-20 rounded-full">Stop</button>
            <button onClick={RemoveStopWatch} className="bg-black-500 text-white h-20 shadow-lg bg-black shadow-black-400 w-20 rounded-full">Reset</button>
        </div>
    </div>
}
export default StopWatch;