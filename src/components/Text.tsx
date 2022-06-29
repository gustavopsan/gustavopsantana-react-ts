import React from "react";
import "../styles/text.scss";

export interface TextProps {
    children: React.ReactNode;
    color?: string;
}

export const Text = (props:TextProps) => {
    return (
        <p className="text-element" style={{ color: `${props.color}` }}>
            {props.children}
        </p>
    );
}

export const SmallText = (props:TextProps) => {
    return (
        <p className="small-text-element" style={{ color: `${props.color}` }}>
            {props.children}
        </p>
    );
}