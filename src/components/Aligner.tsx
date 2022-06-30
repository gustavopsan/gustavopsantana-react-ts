import React from "react";
import "../styles/aligner.scss";

export interface AlignerProps {
    children: React.ReactNode;
    vertical?: boolean;
    horizontal?: boolean;
    center?: boolean;
    end?: boolean;
    start?: boolean;
}

const Aligner = (props:AlignerProps) => {
    return (
        <div className={
            [
                props.horizontal ? "aligner-horizontal" : "",
                props.vertical ? "aligner-vertical" : "",
                props.center ? "aligner-center" : "",
                props.end ? "aligner-end" : "",
                props.start ? "aligner-start" : ""
            ].join(" ")
        }>
            {props.children}
        </div>
    )
}

export default Aligner;