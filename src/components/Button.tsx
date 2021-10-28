import React from "react";

type Button = {
    className?: string;
    onClick?: () => {} | void;
}

const Button: React.FC<Button> = (props) => {
    return (
        <a
            {...props}
            style={{ cursor: "pointer" }}
            className={`${props.className ?? ''} p-5 rounded-sm text-white nav-bar-gradient`}
        >
            {props.children}
        </a>

    )
}

export default Button;