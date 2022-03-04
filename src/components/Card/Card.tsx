import React from "react";
import { GatsbyImage, getImage} from "gatsby-plugin-image";

const Card = (props: CardProps) => {
    const { localFile, title } = props;
    const image = getImage(localFile)
    return (
        <>
            <div 
            onClick={props.onClick}
            className={`${props.className ?? ""} bg-white py-6 px-4 shadow-md h-fit w-fit min-w-min text-black rounded-sm flex-initial flex flex-col gap-y-2`}>
                <GatsbyImage  image={image!} alt={title} className='h-60 w-fit' />
                <div className="h-2 w-full nav-bar-gradient rounded-sm" />
                <h3  className="max-w-fit" >{title}</h3>
            </div>
        </>);
}

export default Card;