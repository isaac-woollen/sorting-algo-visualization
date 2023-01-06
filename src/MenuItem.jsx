import React from "react";
import "./Menu.css"

export default function MenuItem(props) {
    return (
        <div className={props.className}>
            {props.name}
        </div>
    )
}