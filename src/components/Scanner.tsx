import React from "react";
import { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { QrcodeErrorCallback, QrcodeSuccessCallback } from "html5-qrcode/esm/core";
import {Html5QrcodeCameraScanConfig} from 'html5-qrcode/esm/html5-qrcode'

interface IScanner {
    Html5QrcodeCameraScanConfig: Html5QrcodeCameraScanConfig;
    verbose?: boolean;
    qrCodeSuccessCallback: QrcodeSuccessCallback;
    qrCodeErrorCallback: QrcodeErrorCallback;
}

const Scanner = (props: IScanner) => {
    useEffect(() => {
        var config: Html5QrcodeCameraScanConfig = { ...props.Html5QrcodeCameraScanConfig }
        
        let html5QrcodeScanner: Html5QrcodeScanner = new Html5QrcodeScanner(
            'qr-code-full-region', config, props.verbose ?? false);
        html5QrcodeScanner.render(
            props.qrCodeSuccessCallback, props.qrCodeErrorCallback);
        return () => {
            html5QrcodeScanner.clear().catch(error => {
                console.error('Failed to clear html5QrcodeScanner. ', error);
            });
        }
    }, []);
        return (<div id={'qr-code-full-region'} />);
}

export {Scanner, Html5QrcodeCameraScanConfig};