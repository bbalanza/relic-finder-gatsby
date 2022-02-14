import { Blocks, findDescription, findSourceUrl } from './helpers'

const BLOCKS: Blocks = [{ "Description": "Test" }, { "Src": { "url": "Test" } }]
const DESCRIPTION_BLOCK: Blocks = [{ "Description": "Test" }]
const AUDIO_BLOCK: Blocks = [{ "Src": { "url": "Test" } }]

describe("Test findDescription", () => {
    it("Finds the Relic description if present in the Blocks array", () => {
        const description: string | undefined = findDescription(BLOCKS);
        expect(description).toEqual("Test")
    })
    it("Returns undefined if the description does not exist in the Blocks array", () => {
        const description = findDescription(AUDIO_BLOCK)
        expect(description).toBeUndefined()
    })
})

describe("Test findSrc", () => {
    it("Finds the Relic audio source if present in the Blocks array", () => {
        const url = findSourceUrl(BLOCKS)
        expect(url).toEqual("Test")
    })
    it("Returns undefined if the audio source url does not exist in the Blocks array", () => {
        const url = findSourceUrl(DESCRIPTION_BLOCK)
        expect(url).toBeUndefined()
    })
})