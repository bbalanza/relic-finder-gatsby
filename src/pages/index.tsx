import React from "react"
import { Nav, Scanner, Canvas } from "../components/"

export default function Home() {
  return (
    <Canvas>
      <Nav className="h-1/6 sm:h-1/5" />
      <Scanner />
    </Canvas>
  )
}