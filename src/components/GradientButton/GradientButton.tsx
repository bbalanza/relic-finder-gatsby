import React from "react";

const GradientButton = (props: ButtonProps) => {
    return <>
        <button {...props} className={`${props.className ?? ''} p-5 nav-bar-gradient rounded-sm text-white `}>
            {props.children}
        </button>
    </>
}

export default GradientButton;