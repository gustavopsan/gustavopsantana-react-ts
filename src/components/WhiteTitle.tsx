import React from "react";
import "../styles/whiteTitle.scss";

export interface WhiteTitleProps {
    children: React.ReactNode;
}

const WhiteTitle = (props:WhiteTitleProps) => {
    return (
        <h2 className="white-title">
            {props.children}
        </h2>
    );
}

export default WhiteTitle;