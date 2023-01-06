import React from "react";
import './Menu.css';
import MenuItem from "./MenuItem";

export default function Menu() {
    return (
        <div className="Menu">
            <MenuItem className="item-reset" name="Reset" />
            <MenuItem className="item" name="Bubble Sort" />
            <MenuItem className="item" name="Merge Sort" />
            <MenuItem className="item" name="Quick Sort" />
            <MenuItem className="item" name="Insertion Sort" />
        </div>
    );
}