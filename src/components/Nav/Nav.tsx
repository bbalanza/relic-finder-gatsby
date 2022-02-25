import React from "react"
import { StaticImage } from "gatsby-plugin-image"
const Nav = (props: NavProps) => {
    return (
        <header {...props} className={`${props.className ?? ''} h-44 w-full flex flex-col justify-start`}>
            <div className={`h-4 flex-initial w-full nav-bar-gradient`}></div>
            <nav className={`h-5/6 flex-grow w-full bg-black flex items-center justify-center`}>
                <StaticImage className="h-1/2" alt="Gelman Stained Glass Museum Logo" title='logo' placeholder="tracedSVG" loading="eager" objectFit="contain" src='../../images/logo.png'/>
            </nav>
        </header>
    )
}

export default Nav;