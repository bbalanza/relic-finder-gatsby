import React from "react"
import { Nav, Scanner, Content } from "../components/"

export default function Home() {
  return (
    <Content>
      <Nav className="h-1/6 sm:h-1/5" />
      <Scanner />
    </Content>
  )
}