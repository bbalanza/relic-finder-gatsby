import React, { useEffect } from "react";
import { navigate } from "gatsby";
import { Html5Qrcode } from "html5-qrcode";
import { QrcodeErrorCallback, QrcodeSuccessCallback } from "html5-qrcode/esm/core";
import { Html5QrcodeCameraScanConfig, Html5QrcodeFullConfig } from "html5-qrcode/esm/html5-qrcode";
import Helpers from "./Helpers";


const Scanner = (props: ScannerProps) => {
    const scannerDebugConfig: Html5QrcodeFullConfig = {
        verbose: false,
    }

    useEffect(() => {
        /*TODO: Test */
        const html5QrCode = new Html5Qrcode("reader", scannerDebugConfig);
        const qrCodeSuccessCallback: QrcodeSuccessCallback = async (decodedText) => {
            await html5QrCode.stop()
            navigate(Helpers.getRelicID(decodedText))
        };
        const qrCodeErrorCallback: QrcodeErrorCallback = (errorMessage, error) => {
            console.log(error)
        }
        const qrScannerConfig: Html5QrcodeCameraScanConfig = { 
            fps: 10, 
            aspectRatio: Helpers.getCameraRatio(window.screen.width, window.screen.height), 
            qrbox: 250,
            disableFlip: true,
         };
        const cameraConfig = { 
            facingMode: "environment"
        };
        html5QrCode.start(cameraConfig, qrScannerConfig, qrCodeSuccessCallback, qrCodeErrorCallback).catch(() => {
            /* TODO: Test */
            const alertMessage = "Please reload the page and allow access to the camera to use the QR Scanner.";
            alert(alertMessage);
        });
    }, []);

    return <div id={'reader'} className={`${props.className}`}/>;
}

export default Scanner;