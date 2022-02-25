import React from "react";
import Icon from "../../images/emblem.svg"
import { Helmet } from "react-helmet"

const Head = () => {
    return (<>
        <Helmet>
            <link rel="icon" type="image/svg+xml" href={Icon} sizes="16x16" />
        </Helmet>
    </>)
}

export default Head 