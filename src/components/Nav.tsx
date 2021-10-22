import React from "react"
export default function Nav() {
    return (
        <header >
            <div className="bg-gradient-to-r from-accent-100 via-accent-200 to-accent-300 h-2"></div>
            <nav className="text-white bg-black h-24 flex items-center justify-center gap-2 flex-wrap ">
                <img src='/logo.svg' className='h-16'></img>
            </nav>
        </header>
    )
}