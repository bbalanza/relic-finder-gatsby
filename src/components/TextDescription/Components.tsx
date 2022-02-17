// TODO: Test
import React from "react"
import ReactMarkdown from 'react-markdown'

type markdownComponentProps = { markdown: string } & React.HTMLAttributes<HTMLDivElement>
type readMoreButtonProps = { reference: React.MutableRefObject<HTMLButtonElement | null> } & React.HTMLAttributes<HTMLButtonElement>

const MarkdownComponent = (props: markdownComponentProps) => <>
    <ReactMarkdown
        className={`${props.className ?? ''} `}
        children={props.markdown} />
</>
const ReadMoreButton = (props: readMoreButtonProps) => (<button ref={props.reference} onClick={props.onClick}
    className={`${props.className ?? ''} rounded-full py-3 px-5 bg-accent-400 
             text-black text-xs -mt-8 hover:bg-gray-200 motion-safe:animate-pulse`} >Read More</button>)

export { MarkdownComponent, ReadMoreButton }
