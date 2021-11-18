import React from "react"
import Logo from "../../../static/logo.svg"

type Nav = {

} & React.HTMLAttributes<HTMLDivElement>

const Nav = (props: Nav) => {
    return (
        <header className={`${props.className} h-1/4 w-full flex flex-col justify-start`}>
            <div className={`h-4 flex-initial w-full nav-bar-gradient`}></div>
            <nav className={`flex-grow h-5/6 w-full bg-black flex items-center justify-center`}>
                <Logo className="h-3/5 fill-current text-white" />
            </nav>
        </header>
    )
}

export default Nav;