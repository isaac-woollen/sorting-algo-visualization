import React, { useEffect, useState } from "react";
import "./Visualizer.css";

export default function Visualizer() {
    const [data, setData] = useState([]);

    useEffect(() => {
        resetData();
    }, []);

    function handleClick() {
        resetData();
    }

    function resetData() {
        const array = [];

        for (let i = 0; i < 20; i++) {
            array.push(generateRandomNumber(5, 1000));
        }
        setData(array);
    }

    return <div className="visualizer">
        <button onClick={handleClick} className="container">Button</button>
        <div className="data-container">
            {data.map((value, index) => {
                let height = String(value / 2) + "px"
                return <div className="data-bar" style={{ paddingBottom: height }}>{value}</div>
            })}
        </div>
    </div>

    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
};
