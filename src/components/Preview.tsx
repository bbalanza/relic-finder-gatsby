import React from "react";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import Relic from "../templates/relic";

interface PreviewProps {
    localFile: any;
    name: string;
}

const Preview: React.FC<PreviewProps> = (props: PreviewProps) => {
    const image = getImage(props.localFile);
    return (
        <>
        <div className="grid">
                <GatsbyImage
                    className="row-start-1 col-start-1"
                    image={image!}
                    alt={"Relic Image"}
                />
            <div className="grid relative items-end bg-gradient-to-b from-transparent via-transparent to-white row-start-1 col-start-1">
            </div>
            <h2 className="">{props.name}</h2>
        </div>
        </>
    )
}

export default Preview