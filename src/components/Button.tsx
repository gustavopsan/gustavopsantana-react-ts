import React from "react";
import "../styles/button.scss";

export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    width?: string;
}

const Button = (props:ButtonProps) => {

    if (props.width) {
        return (
            <button className="button-contact" style={{ width: props.width }} onClick={props.onClick}>
                {props.children}
            </button>
        );
    } else {
        return (
            <button className="button-contact" onClick={props.onClick}>
                {props.children}
            </button>
        );
    }
}

export default Button;