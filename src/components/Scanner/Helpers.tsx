/* TODO: Test!!! */
const stripUrlParams = (decodedText: string): string => {
    const slugRegEx = new RegExp(/\/{1}[0-9 A-F]{4}/, 'g')
    const urlRegEx = new RegExp(/^http(|s):\/\/relic-finder.gelmanmuseum.org\/{1}/, 'g')
    let slugMatch = slugRegEx.exec(decodedText)?.toString() ?? '';
    let urlMatch = urlRegEx.exec(decodedText)?.toString() ?? '';
    if (urlMatch === '' || slugMatch === '')
        throw new Error('Please scan a valid URL.')
    return slugMatch;
}

const getRelicID = (url: string): string => stripUrlParams(url)

const getCameraRatio = (screenWidth: number, screenHeight: number): number => {
    return (16 / 9) * .76;
}

export default { stripUrlParams, getRelicID, getCameraRatio };