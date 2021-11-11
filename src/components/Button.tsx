import React from "react";
import { Link } from "gatsby"

type ButtonProps = {
    className?: string;
    to: string;
} & { children?: React.ReactNode }

const Button = (props: ButtonProps) => {
    return <>
        <h4 className={`${props.className ?? ''}`}>
            <Link
                to={props.to}
                style={{ cursor: "pointer" }}
                className={` p-5 rounded-sm text-white nav-bar-gradient`}
            >
                {props.children}
            </Link>
        </h4>
    </>
}

export default Button;