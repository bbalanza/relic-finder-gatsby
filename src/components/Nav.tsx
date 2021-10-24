import React from "react"
export default function Nav() {
    return (
        <header className="mb-2 sm:mb-4" >
            <div className="bg-gradient-to-r from-accent-100 via-accent-200 to-accent-300 h-2"></div>
            <nav className="text-green-900 bg-black h-32 flex items-center justify-center gap-2 flex-wrap ">
                <object className="h-5/6 " data='/logo.svg' type='image/svg+xml'></object>
            </nav>
        </header>
    )
}