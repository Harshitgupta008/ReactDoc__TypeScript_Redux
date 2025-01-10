import { useEffect, useState } from "react";
import Connection from "./Connection";

interface ChatConnection {
    roomId: string
}
const Chat: React.FC<ChatConnection> = ({ roomId }) => {
    const [textUrl, setTextUrl] = useState<string>("localhoast5173/hooks/");
    useEffect(() => {
        let Checkconnection = Connection(textUrl, roomId);
        Checkconnection.connect();
        return () => {
            Checkconnection.disconnect();
        }

    }, [textUrl, roomId]);
    return <>
        <input type="text" value={textUrl} placeholder="Search..." onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTextUrl(e.target.value)} className="outline-gray-400 border-2 border-gray-400 rounded-xl text-black px-4 w-72 sm:w-80 py-2 md:py-3" />
    </>
}
export default Chat;