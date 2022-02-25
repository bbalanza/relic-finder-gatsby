import React from "react"
import { Nav } from "../components/Nav"
import { Scanner } from "../components/Scanner"
import { Head } from "../components/Head"

export default function Home() {
  return (<>
    <Head/>
    <div className="flex justify-start flex-col">
      <Nav />
      <Scanner />
    </div>
  </>
  )
}
