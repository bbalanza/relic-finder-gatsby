import React from "react"

const Nav = (props: NavProps) => {
    return (
        <header {...props} className={`${props.className} h-1/4 w-full flex flex-col justify-start`}>
            <div className={`h-4 flex-initial w-full nav-bar-gradient`}></div>
            <nav className={`flex-grow h-5/6 w-full bg-black flex items-center justify-center`}>
                <img className="h-1/2" src="./logo.png"/>
            </nav>
        </header>
    )
}

export default Nav;