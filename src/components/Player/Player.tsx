import React from "react"
import { ReactElement } from "react-markdown/lib/react-markdown";

const Player = (props: Player): ReactElement => {
    return <div
            className={`${props.className ?? ''} flex-grow self-center`}
        >
            <audio
                controls
                title='audio-player'
                src={props.src}
            >
                Your browser does not support the
                audio element.
            </audio>
        </div>
}

export default Player;