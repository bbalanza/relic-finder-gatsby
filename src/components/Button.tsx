import React from "react";
import { Link } from "gatsby"


type ButtonProps = {
    className?: string;
    to: string;
} & { children?: React.ReactNode }

const Button = (props: ButtonProps) => {
    return <>
        <div className={`${props.className ?? ''}`}>
            <h4 className="mt-5">
                <Link
                    to={props.to}
                    style={{ cursor: "pointer" }}
                    className={`p-5 rounded-sm text-white nav-bar-gradient`}
                >
                    {props.children}
                </Link>
            </h4>
        </div>

    </>
}

export default Button;