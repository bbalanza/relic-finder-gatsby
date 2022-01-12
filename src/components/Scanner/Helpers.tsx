/* TODO: Test!!! */
const getRelicID = (decodedText: string): string => {
    const slugRegEx = new RegExp(/\/{1}[0-9 A-F]{4}/, 'g')
    const urlRegEx = new RegExp(/^http(|s):\/\/relic-finder.gelmanmuseum.org\/{1}/, 'g')
    let slugMatch = slugRegEx.exec(decodedText)?.toString() ?? '';
    let urlMatch = urlRegEx.exec(decodedText)?.toString() ?? '';
    if (urlMatch === '' || slugMatch === '')
        throw new Error('Please scan a valid URL.')
    return slugMatch;
}

const getCameraRatio = (widthRatio: number, heightRatio: number, screenPercentage: number): number => {
    return (widthRatio / heightRatio) * screenPercentage;
}

export default { getRelicID, getCameraRatio };