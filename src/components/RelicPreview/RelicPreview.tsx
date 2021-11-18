import React from "react";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import Relic from "../../templates/relic";

const RelicPreview = (props: PreviewProps) => {
    const image = getImage(props.localFile);
    return (
        <>
        <div className="grid">
                <GatsbyImage
                    className="row-start-1 col-start-1"
                    image={image!}
                    alt={"Relic Image"}
                />
            <div className="grid relative items-end gradient-to-bg row-start-1 col-start-1">
            </div>
            {props.children}
        </div>
        </>
    )
}

export default RelicPreview