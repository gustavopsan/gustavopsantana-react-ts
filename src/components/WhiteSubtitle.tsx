import React from "react";
import "../styles/whiteSubtitle.scss";

export interface WhiteSubtitleProps {
    children: React.ReactNode;
}

const WhiteSubtitle = (props:WhiteSubtitleProps) => {
    return (
        <h3 className="white-subtitle">
            {props.children}
        </h3>
    );
}

export default WhiteSubtitle;