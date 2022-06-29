import React from "react";
import "../styles/container.scss";

export interface ContainerProps {
    children: React.ReactNode;
    backgroundImage: string;
}

const Container = (props:ContainerProps) => {

    const style = {
        backgroundImage: `url(${props.backgroundImage})`
    }

    return (
        <section className="container-element" style={style}>
            {props.children}
        </section>
    )
}

export default Container;