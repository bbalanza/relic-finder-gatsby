import React, { ReactChild, ReactFragment, ReactNode } from "react";

const Layout: React.FC = (props) => {
    return (
        <div
        className={`container space-y-2`}
        >
        {props.children}
        </div>
    );
} 
export default Layout;