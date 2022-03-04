import React from "react";
import { navigate } from "gatsby";
import { GradientButton } from "../components/GradientButton";

export const ReturnToButton = ({href, text} : {href: string, text: string}) => {
    return (
        <GradientButton className={`mb-10`} onClick={() => navigate(href)}>
            <h4>
                {text}
            </h4>
        </GradientButton>
    )
}