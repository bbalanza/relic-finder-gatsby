import React from "react";

const Layout: React.FC = (props) => {
    return (
        <div
        className={`container space-y-5 block`}
        >
        {props.children}
        </div>
    );
} 
export default Layout;