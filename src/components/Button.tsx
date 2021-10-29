import React from "react";
import {Link} from "@reach/router"

type Button = {
    className?: string;
    to: string;
}

const Button: React.FC<Button> = (props) => {
    return (
        <Link
            {...props}
            style={{ cursor: "pointer" }}
            className={`${props.className ?? ''} p-5 rounded-sm text-white nav-bar-gradient`}
        >
            {props.children}
        </Link>

    )
}

export default Button;