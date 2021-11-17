import React from "react";
import { Link } from "gatsby"


type ButtonProps = {
    className?: string;
    to: string;
} & { children?: React.ReactNode }

const Button = (props: ButtonProps) => {
    return <>
        <div className={`h-full`}>
            <h4 className={`${props.className ?? ''}`}>
                <Link
                    to={props.to}
                    className={`p-5 rounded-sm text-white nav-bar-gradient`}>
                    {props.children}
                </Link>
            </h4>
        </div>

    </>
}

export default Button;