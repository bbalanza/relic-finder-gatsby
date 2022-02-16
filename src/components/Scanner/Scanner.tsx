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
    const WidthRatio = 16;
    const HeightRatio = 9;
    const ScreenPercentage = .79;
    useEffect(() => {
        const html5QrCode = new Html5Qrcode("reader", scannerDebugConfig);

        const qrCodeSuccessCallback: QrcodeSuccessCallback = async (decodedText) => {
            try {
                const result = Helpers.getRelicID(decodedText);
                await html5QrCode.stop()
                navigate(result)
            }
            catch (error: any) {
                alert(error.message)
            }
        };
        /* The HTML5 scanner requires an error callback for when a scan is unsuccessful. Given that the 
        // scanner makes one scan per frame, it is always reporting failing scans. It is better to
        // ignore these, hence the function returning undefined.
        */
        const qrCodeErrorCallback: QrcodeErrorCallback = (errorMessage, error) => null
        const qrScannerConfig: Html5QrcodeCameraScanConfig = {
            fps: 10,
            aspectRatio: Helpers.getCameraRatio(WidthRatio, HeightRatio, ScreenPercentage),
            qrbox: 250,
            disableFlip: false,
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

    return <div id={'reader'} {...props} className={`${props.className ?? ''} `} />;
}

export default Scanner;