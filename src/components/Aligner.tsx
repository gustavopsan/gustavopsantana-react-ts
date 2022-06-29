import React from "react";
import "../styles/aligner.scss";

export interface AlignerProps {
    children: React.ReactNode;
    vertical?: boolean;
    horizontal?: boolean;
    center?: boolean;
}

const Aligner = (props:AlignerProps) => {
    return (
        <div className={
            [
                props.horizontal ? "aligner-horizontal" : "",
                props.vertical ? "aligner-vertical" : "",
                props.center ? "aligner-center" : ""
            ].join(" ")
        }>
            {props.children}
        </div>
    )
}

export default Aligner;