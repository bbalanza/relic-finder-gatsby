import React, { useEffect } from "react";
import { navigate } from "gatsby";
import { Html5Qrcode } from "html5-qrcode";
import { QrcodeErrorCallback, QrcodeSuccessCallback } from "html5-qrcode/esm/core";
import { Html5QrcodeCameraScanConfig, Html5QrcodeFullConfig } from "html5-qrcode/esm/html5-qrcode";

const Scanner = (props: ScannerProps) => {
    const scannerDebugConfig: Html5QrcodeFullConfig = {
        verbose: false,
    }

    useEffect(() => {
        const html5QrCode = new Html5Qrcode("reader", scannerDebugConfig);
        const qrCodeSuccessCallback: QrcodeSuccessCallback = async (decodedText) => {
            await html5QrCode.stop()
            navigate(getRelicID(decodedText))
        };
        const qrCodeErrorCallback: QrcodeErrorCallback = (errorMessage, error) => {
            console.log(error)
        }
        const qrScannerConfig: Html5QrcodeCameraScanConfig = { 
            fps: 10, 
            aspectRatio: getCameraRatio(window.screen.width, window.screen.height), 
            qrbox: 250 };
        const cameraConfig = { 
            facingMode: "environment"
        };
        html5QrCode.start(cameraConfig, qrScannerConfig, qrCodeSuccessCallback, qrCodeErrorCallback);
    }, []);

    return <div id={'reader'} className={`${props.className}`}/>;
}

export default Scanner;