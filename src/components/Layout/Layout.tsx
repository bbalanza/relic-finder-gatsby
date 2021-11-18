import React from "react";

type LayoutProps = {

} & { children?: React.ReactNode} & React.HTMLAttributes<HTMLDivElement>

const Layout = (props: LayoutProps) => {
    return (
        <div
            className={`layout`}
        >
            {props.children}
        </div>
    );
}
export default Layout;