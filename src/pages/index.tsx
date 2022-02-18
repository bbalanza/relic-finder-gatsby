import React from "react"
import { Nav } from "../components/Nav"
import { Scanner } from "../components/Scanner"

export default function Home() {
  return <div className="flex justify-start flex-col">
    <Nav />
    <Scanner />
  </div>
}
