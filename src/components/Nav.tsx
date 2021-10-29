import React from "react"
import Logo from "../../static/logo.svg"
export default function Nav() {
    return (
        <header>
            <div className="nav-bar-gradient"></div>
            <nav className="bg-black h-32 sm:h-44 flex items-center justify-center ">
                <Logo className="h-3/5 fill-current text-white" />
            </nav>
        </header>
    )
}