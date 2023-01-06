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

        for (let i = 0; i < 30; i++) {
            array.push(generateRandomNumber(10, 700));
        }
        setData(array);
    }

    return <div className="visualizer">
        {/* <button onClick={handleClick} className="container">Button</button> */}
        <div className="data-container">
            {data.map((value, index) => {
                let height = String(value) + "px"
                return <div className="data-bar" style={{ height: height }}></div>
            })}
        </div>
    </div>

    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
};
