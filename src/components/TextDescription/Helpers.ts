// TODO: Test
const trimMarkdown = (markdown: string, allowedCharacterCount: number): string => {
    let shortMarkdown = ''
    if (markdown.length > allowedCharacterCount){
        shortMarkdown = markdown.slice(0, allowedCharacterCount) + '...'
        return shortMarkdown;
    }
    return markdown
}

const exceedsCharacterCount = (markdown: string, allowedCharacterCount: number) => {
    return markdown.length > allowedCharacterCount
}

export default {trimMarkdown, exceedsCharacterCount}