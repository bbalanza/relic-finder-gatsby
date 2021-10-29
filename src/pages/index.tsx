import React from "react"
import Nav from "../components/Nav"
import { Scanner} from "../components/Scanner"

export default function Home() {
  return (
    <>
      <Nav />
    <div className="bg-black h-screen">
      <Scanner />
    </div>
    </>
  )
}