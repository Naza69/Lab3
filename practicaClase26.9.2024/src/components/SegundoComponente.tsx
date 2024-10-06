import {FC, useDebugValue, useState} from "react";

const SegundoComponente: FC = () => {
    const [color, setColor] = useState<string>("ffffff");


    const generateRandomColor = () => {
        const newColor = `#${Math.floor(Math.random() * 123456).toString(16)}`;
        setColor(newColor); 
    }

    return (
        <div 
            style={{
            height: "40vh",
            backgroundColor: color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}
        >
            <div>
            <h1 style={{
                color: "#000"
            }}></h1>    
        </div>
        </div>
    )
}

export default SegundoComponente