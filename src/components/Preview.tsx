import React from "react";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";

interface PreviewProps{
    localFile: any;
}

const Preview: React.FC<PreviewProps>= (props: PreviewProps) => {
    const image = getImage(props.localFile);
    return (
        <>
            <GatsbyImage
                image={image!}
                alt={"Relic Image"}
            />
        </>
    )
}

export default Preview