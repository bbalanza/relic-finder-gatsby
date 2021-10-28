import React from "react";

type ButtonProps = {
    text: string;
    href?: string;
    className?: string;
    onClick?: () => {} | void;
}

const Button : React.FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <a style={{cursor: "pointer"}} onClick={props.onClick} className={`${props.className ?? ''} p-5 rounded-sm text-white nav-bar-gradient`}>{props.text}</a>

    )
}

export default Button;