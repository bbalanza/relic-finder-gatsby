import React from "react"
import Logo from "../../static/logo.svg"

type Nav = {

} & React.HTMLAttributes<HTMLDivElement>

const Nav = (props: Nav) => {
    return (
        <header className={`${props.className}`}>
            <div className={`h-1/6 w-full nav-bar-gradient`}></div>
            <nav className={`h-5/6 w-full bg-black flex items-center justify-center`}>
                <Logo className="h-3/5 fill-current text-white" />
            </nav>
        </header>
    )
}

export default Nav;