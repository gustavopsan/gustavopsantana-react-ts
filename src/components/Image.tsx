import "../styles/image.scss";

export interface ImageProps {
    src: string;
    alt: string;
    className?: string;
}

const Image = (props:ImageProps) => {
    return (
        <img src={props.src} alt={props.alt} className={props.className} />
    );
}

export default Image;