import React from "react";

type CanvasProps = React.HTMLAttributes<HTMLDivElement> & {children?: React.ReactNode}

const Canvas = (props: CanvasProps) => {
    return <div {...props} className={`${props.className ?? ''} canvas`}>
        {props.children}
    </div>
}

export default Canvas;