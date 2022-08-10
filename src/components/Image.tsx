import "../styles/image.scss";

export interface ImageProps {
    src: string;
    alt: string;
    className?: string;
    width?: string;
    height?: string;
    paddingBottom?: string;
}

const Image = (props:ImageProps) => {

    const { src, alt, className, width, height, paddingBottom } = props;

    var style = {} as object;

    if (paddingBottom) {
        Object.assign( style, { paddingBottom: paddingBottom })
    }

    return (
        <img src={src} alt={alt} className={className} width={width ?? ""} height={height ?? ""} style={style}/>
    );
}

export default Image;