import React from "react";
import { GatsbyImage, getImage} from "gatsby-plugin-image";

const RelicPreview = (props: PreviewProps) => {
    const image = getImage(props.localFile);
    return (
        <>
            <div className={`${props.className ?? ''} grid w-full`}>
                <GatsbyImage
                    className="row-start-1 col-start-1"
                    image={image!}
                    alt={"Relic Image"}
                />
                <div className="grid relative items-end gradient-to-bg row-start-1 col-start-1">
                </div>
                <div className="pt-2">
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default RelicPreview