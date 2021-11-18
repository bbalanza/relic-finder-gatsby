import React from "react";

type ContentProps = React.HTMLAttributes<HTMLDivElement> & {children?: React.ReactNode}

const Content = (props: ContentProps) => {
    return <div {...props} className={`${props.className ?? ''} content`}>
        {props.children}
    </div>
}

export default Content;