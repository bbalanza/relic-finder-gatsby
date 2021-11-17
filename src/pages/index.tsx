import React from "react"
import { Nav } from "../components/Nav"
import { Scanner } from "../components/Scanner"

export default function Home() {
  return (
    <>
      <Nav className="h-1/6 sm:h-1/5" />
      <Scanner />
    </>
  )
}