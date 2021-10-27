import React from "react"
import Logo from "../../static/logo.svg"
export default function Nav() {
    return (
        <header className="mb-2 sm:mb-4" >
            <div className="nav-bar-gradient"></div>
            <nav className="bg-black h-32 sm:h-44 flex items-center justify-center gap-2 flex-wrap ">
                <Logo className="h-3/5 fill-current text-white" />
            </nav>
        </header>
    )
}