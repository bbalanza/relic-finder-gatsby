import React from "react";
import { useEffect } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { QrcodeErrorCallback, QrcodeSuccessCallback } from "html5-qrcode/esm/core";
import { navigate } from "@reach/router";

type Scanner = {
    verbosity?: boolean;
} 

const Scanner: React.FC<Scanner> = (props) => {
    const verbosity = props.verbosity ?? false; 
    useEffect(() => {
        const html5QrCode = new Html5Qrcode("reader", verbosity);
        const qrCodeSuccessCallback: QrcodeSuccessCallback = async (decodedText, decodedResult) => {
            await html5QrCode.stop()
            navigate(decodedText)
        };
        const QrcodeErrorCallback: QrcodeErrorCallback = (errorMessage, error) => {
            console.log(error)
        }
        const config = { fps: 10, qrbox: { width: 250, height: 250 } };
        html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback,undefined);
    }, []);

    return (<div id={'reader'} />);
}

export {Scanner};