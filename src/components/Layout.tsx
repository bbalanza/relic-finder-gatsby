import React from "react";

const Layout: React.FC = (props) => {
    return (
        <div
        className={`container space-y-5 pb-10`}
        >
        {props.children}
        </div>
    );
} 
export default Layout;