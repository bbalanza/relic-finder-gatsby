import React from "react";

type ContentProps = { children?: React.ReactNode} & React.HTMLAttributes<HTMLDivElement>

const Content = (props: ContentProps) => {
    return (
        <main
            {...props}
            className={`${props.className ?? ''} content`}
        >
            {props.children}
        </main>
    );
}
export default Content;