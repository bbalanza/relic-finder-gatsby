import React from "react";
import { useEffect } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { QrcodeErrorCallback, QrcodeSuccessCallback } from "html5-qrcode/esm/core";
import { navigate } from "gatsby";
import { Html5QrcodeFullConfig } from "html5-qrcode/esm/html5-qrcode";

/* TODO: Test!!! */
const stripUrlParams = (decodedText: string): string => {
    const parameterRegEx = new RegExp(/\/{1}[0-9 A-F]{4}/, 'g')
    return parameterRegEx.exec(decodedText)?.toString() ?? '';
}

const findScreenAspectRatio = (): number => {
    const realWidth = window.screen.width * window.devicePixelRatio;
    const realHeight = window.screen.height * window.devicePixelRatio;
    return realHeight / realWidth;
}

const Scanner: React.FC = (props) => {
    const scannerDebugConfig: Html5QrcodeFullConfig = {
        verbose: false,
    }
    const aspectRatio = findScreenAspectRatio();

    useEffect(() => {
        const html5QrCode = new Html5Qrcode("reader", scannerDebugConfig);
        const qrCodeSuccessCallback: QrcodeSuccessCallback = async (decodedText, decodedResult) => {
            await html5QrCode.stop()
            navigate(stripUrlParams(decodedText))
        };
        const QrcodeErrorCallback: QrcodeErrorCallback = (errorMessage, error) => {
            console.log(error)
        }
        const qrScannerConfig = { fps: 10, aspectRatio: aspectRatio, qrbox: { width: 250, height: 250 } };
        html5QrCode.start({ facingMode: "environment" }, qrScannerConfig, qrCodeSuccessCallback, QrcodeErrorCallback);
    }, []);

    return (<div id={'reader'} />);
}

export { Scanner };