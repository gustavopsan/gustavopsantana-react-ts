import React from "react";
import "../styles/aligner.scss";

export interface AlignerProps {
    children: React.ReactNode;
    vertical?: boolean;
    horizontal?: boolean;
    center?: boolean;
    end?: boolean;
    start?: boolean;
    limiter?: number;
}

const Aligner = (props:AlignerProps) => {

    var style = {};

    if (props.limiter) {
        Object.assign(style, { maxWidth: props.limiter + "px" });
    }

    return (
        <div className={
            [
                props.horizontal ? "aligner-horizontal" : "",
                props.vertical ? "aligner-vertical" : "",
                props.center ? "aligner-center" : "",
                props.end ? "aligner-end" : "",
                props.start ? "aligner-start" : ""
            ].join(" ")
        } style={style}>
            {props.children}
        </div>
    )
}

export default Aligner;