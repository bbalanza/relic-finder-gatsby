import React from "react";
import Nav from "./Nav"
const Layout: React.FC = (props) => {
    return (
        <div
            className={`layout`}
        >
            <Nav className='h-1/4 w-full' />
            {props.children}
        </div>
    );
}
export default Layout;