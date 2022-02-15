// TODO: Test
interface Description {
    Description: string;
}
interface AudioSource {
    src: {
        url: string
    }
}

type Blocks = (Description | AudioSource)[]

const findDescription = (blocks: Blocks): string | undefined => {
    const result: Description | undefined = blocks.find((element: Object) => Object.keys(element).includes("Description")) as Description;
    if (result)
        return result.Description;
    return result;
}
const findSourceUrl = (blocks: Blocks): string | undefined => {
    const result: AudioSource | undefined = blocks.find((element: Object) => Object.keys(element).includes("src")) as AudioSource
    if (result)
        return result.src.url;
    return result;
}

export { Blocks, findDescription, findSourceUrl } 