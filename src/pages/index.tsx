import React from "react"
import { Nav, Scanner } from "../components/"

export default function Home() {
  return <div className="h-screen overflow-y-hidden lg:overflow-y-auto">
    <Nav />
    <Scanner />
  </div>
}