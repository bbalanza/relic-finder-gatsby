import React from "react";

const GradientButton = (props: ButtonProps) => {
    return <>
        <button {...props} className={`${props.className ?? ''} flex-initial w-80 max-w-80 p-5 nav-bar-gradient rounded-sm text-white `}>
            {props.children}
        </button>
    </>
}

export default GradientButton;