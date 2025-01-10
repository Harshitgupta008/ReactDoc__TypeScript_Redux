import { useState, useEffect } from "react";
const PointerMove: React.FC = () => {
    interface PositionType {
        x: number,
        y: number
    }
    const [position, setPosition] = useState<PositionType>({ x: 0, y: 0 });

    useEffect(() => {

        const handlePointerMove = (e: PointerEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("pointermove", handlePointerMove)
        return () => {
            window.removeEventListener("pointermove", handlePointerMove)
        }

    }, []);

    return <>
        <div style={{ position: 'absolute', backgroundColor: 'gray', borderRadius: '50%', opacity: 0.6, transform: `translate(${position.x}px, ${position.y}px)`, pointerEvents: 'none', left: -20, top: 20, width: 40, height: 40,}} />
    </>
}
export default PointerMove;