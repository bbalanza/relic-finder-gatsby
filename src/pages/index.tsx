import React from "react"
import { Nav, Scanner } from "../components/"

export default function Home() {
  return <div className="flex justify-start flex-col">
    <Nav />
    <Scanner />
  </div>
}