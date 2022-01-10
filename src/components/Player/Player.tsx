import React from "react"
import { ReactElement } from "react-markdown/lib/react-markdown";

const Player = (props: Player): ReactElement => {
    return <div
            className={`${props.className ?? ''} h-1/5 flex-auto self-center`}
        >
            <audio
                controls
                src={props.audioUrl}
            >
                Your browser does not support the
                <code>audio</code> element.
            </audio>
        </div>
}

export default Player;