import React from "react";
import "../styles/button.scss";

export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    width?: string;
}

const Button = (props:ButtonProps) => {

    const { children, onClick, width } = props;
    var style = {} as object;

    if (width) {
        Object.assign( style, { width: width })
    }

    return (
        <button className="button-contact" style={style} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;