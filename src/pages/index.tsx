import React from "react"
import { Nav, Scanner } from "../components/"

export default function Home() {
  return (
    <>
      <Nav className="h-1/6 sm:h-1/5" />
      <Scanner />
    </>
  )
}