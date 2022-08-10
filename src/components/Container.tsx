import React from "react";
import "../styles/container.scss";

export interface ContainerProps {
    children: React.ReactNode;
    backgroundImage?: string;
    backgroundColor?: string;
    borderBottom?: string;
    id?: string;
}

const Container = (props:ContainerProps) => {

    const { children, backgroundImage, backgroundColor, borderBottom, id} = props;
    var style = {} as object;

    if (backgroundImage) {
        Object.assign( style, { backgroundImage: `url(${backgroundImage})` })
    }
    if (backgroundColor) {
        Object.assign( style, { backgroundColor: backgroundColor })
    }
    if (borderBottom) {
        Object.assign( style, { borderBottom: borderBottom })
    }
    
    return (
        <section className="container-element" style={style} id={id}>
            {children}
        </section>
    )
}

export default Container;