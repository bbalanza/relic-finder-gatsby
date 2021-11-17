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

const getRelicID = (url:string): string => stripUrlParams(url)

const getCameraRatio = (screenWidth: number, screenHeight: number): number => {
   return (16/9) * .8; 
}

const Scanner: React.FC = () => {
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
        const qrScannerConfig: Html5QrcodeCameraScanConfig = { fps: 10, aspectRatio: getCameraRatio(window.screen.width, window.screen.height), qrbox: 250 };
        html5QrCode.start({ facingMode: "environment" }, qrScannerConfig, qrCodeSuccessCallback, qrCodeErrorCallback);
    }, []);

    return (<div id={'reader'} />);
}

export default Scanner;