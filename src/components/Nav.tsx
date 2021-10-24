import React from "react"
export default function Nav() {
    return (
        <header className="mb-2" >
            <div className="bg-gradient-to-r from-accent-100 via-accent-200 to-accent-300 h-2"></div>
            <nav className="text-white bg-black h-32 flex items-center justify-center gap-2 flex-wrap ">
                <img src='/logo.svg' className='h-20'></img>
            </nav>
        </header>
    )
}