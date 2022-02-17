import React, { useState, useRef} from "react"
import Helpers from './Helpers'
import { MarkdownComponent, ReadMoreButton } from './Components'

// TODO: Test
const TextDescription = (props: TextDescriptionProps) => {
    const allowedCharacterCount = 256
    const originalMarkdown = props.markdown
    const trimmedMarkdown = Helpers.trimMarkdown(originalMarkdown, allowedCharacterCount)
    const [markdown, setMarkdown] = useState(trimmedMarkdown)
    const refReadMoreButton = useRef<null | HTMLButtonElement>(null)
    const gradientToBgRef = useRef<null | HTMLDivElement>(null)

    const handleReadMoreClick = () => {
        setMarkdown(originalMarkdown)
        refReadMoreButton.current!.classList.add("hidden")
        gradientToBgRef.current!.classList.add("hidden")
    }

    const shortenedMarkdownComponent = () => (
        <div className="flex flex-col justify-start gap-y-5 items-center">
                <div className="grid">
                    <MarkdownComponent className="row-start-1 col-start-1" markdown={markdown} />
                    <div ref={gradientToBgRef} className="row-start-1 col-start-1 gradient-to-bg" />
                </div>
            <ReadMoreButton onClick={handleReadMoreClick} reference={refReadMoreButton} />
        </div>)

    return <>
        {!Helpers.exceedsCharacterCount(markdown, allowedCharacterCount)
            ? (<MarkdownComponent markdown={markdown} />)
            : shortenedMarkdownComponent()
        }
    </>
}

export default TextDescription