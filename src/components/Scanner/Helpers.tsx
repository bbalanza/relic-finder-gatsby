/* TODO: Test!!! */
const stripUrlParams = (decodedText: string): string => {
    const parameterRegEx = new RegExp(/\/{1}[0-9 A-F]{4}/, 'g')
    return parameterRegEx.exec(decodedText)?.toString() ?? '';
}
const getRelicID = (url:string): string => stripUrlParams(url)

const getCameraRatio = (screenWidth: number, screenHeight: number): number => {
   return (16/9) * .76; 
}

export default {stripUrlParams, getRelicID, getCameraRatio};