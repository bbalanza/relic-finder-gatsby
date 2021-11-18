import React from "react";
import { Nav } from "../Nav"
const Layout: React.FC = (props) => {
    return (
        <div
            className={`layout`}
        >
            {props.children}
        </div>
    );
}
export default Layout;