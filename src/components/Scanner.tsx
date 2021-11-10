import React, { useState } from "react";
import { useEffect } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { QrcodeErrorCallback, QrcodeSuccessCallback } from "html5-qrcode/esm/core";
import { navigate } from "gatsby";
import { Html5QrcodeCameraScanConfig, Html5QrcodeFullConfig } from "html5-qrcode/esm/html5-qrcode";

/* TODO: Test!!! */
const stripUrlParams = (decodedText: string): string => {
    const parameterRegEx = new RegExp(/\/{1}[0-9 A-F]{4}/, 'g')
    return parameterRegEx.exec(decodedText)?.toString() ?? '';
}

const ifBrowser = typeof window != "undefined";

const Scanner: React.FC = () => {
    const scannerDebugConfig: Html5QrcodeFullConfig = {
        verbose: false,
    }
    const [screenWidth, setScreenWidth] = useState(0)
    const [screenHeight, setScreenHeight] = useState(0)

    useEffect(() => {
        setScreenWidth(window.screen.width);
        setScreenHeight(window.screen.height);
        const html5QrCode = new Html5Qrcode("reader", scannerDebugConfig);
        const qrCodeSuccessCallback: QrcodeSuccessCallback = async (decodedText, decodedResult) => {
            await html5QrCode.stop()
            navigate(stripUrlParams(decodedText))
        };
        const QrcodeErrorCallback: QrcodeErrorCallback = (errorMessage, error) => {
            console.log(error)
        }
        const qrScannerConfig: Html5QrcodeCameraScanConfig = { fps: 10, aspectRatio: 1, qrbox: 250 };
        html5QrCode.start({ facingMode: "environment" }, qrScannerConfig, qrCodeSuccessCallback, QrcodeErrorCallback);
    }, []);

    return (<div id={'reader'} />);
}

export { Scanner };