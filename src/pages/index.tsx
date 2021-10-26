import React from "react"
import Nav from "../components/Nav"
import {Scanner, Html5QrcodeCameraScanConfig} from "../components/Scanner"

export default function Home() {
  var scannerConfig: Html5QrcodeCameraScanConfig = {
            fps: 10,
            qrbox: 250,
            disableFlip: false,
  }

  return (
    <>
            <Nav />
            <Scanner
            Html5QrcodeCameraScanConfig={scannerConfig}
            qrCodeSuccessCallback={console.log}
            qrCodeErrorCallback={console.error} />
            </>
  )
}