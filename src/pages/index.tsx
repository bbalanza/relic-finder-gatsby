import React from "react"
import { Nav, Scanner, Canvas } from "../components/"

export default function Home() {
  return (
    <Canvas className="overflow-y-hidden">
      <Nav/>
      <Scanner />
    </Canvas>
  )
}