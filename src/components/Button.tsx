import React from "react";

type ButtonProps = {
    text: string;
    href: string;
    className?: string;
}

const Button : React.FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <a href={props.href} className={`${props.className ?? ''} p-5 rounded-sm text-white nav-bar-gradient`}>{props.text}</a>
    )
}

export default Button;