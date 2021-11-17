import React from "react"
import Logo from "../../static/logo.svg"

type Nav = {

} & React.HTMLAttributes<HTMLDivElement>

const Nav = (props: Nav) => {
    return (
        <header>
            <div className={`${props.className} nav-bar-gradient`}></div>
            <nav className={`bg-black h-32 sm:h-44 flex items-center justify-center`}>
                <Logo className="h-3/5 fill-current text-white" />
            </nav>
        </header>
    )
}

export default Nav;