import React from "react";

type LayoutProps = {

} & { children?: React.ReactNode} & React.HTMLAttributes<HTMLDivElement>

const Layout = (props: LayoutProps) => {
    return (
        <div
            {...props}
            className={`${props.className ?? ''} layout`}
        >
            {props.children}
        </div>
    );
}
export default Layout;