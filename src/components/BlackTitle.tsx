import React from "react";
import "../styles/blackTitle.scss";

export interface BlackTitleProps {
    children: React.ReactNode;
}

const BlackTitle = (props:BlackTitleProps) => {
    return (
        <h2 className="black-title">
            {props.children}
        </h2>
    );
}

export default BlackTitle;