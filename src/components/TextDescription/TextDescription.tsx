import React from "react"
import ReactMarkdown from 'react-markdown'

const TextDescription = (props: TextDescriptionProps) => {
    return ((<ReactMarkdown className={`${props.className ?? ''} `} children={props.markdown} />))
}

export default TextDescription