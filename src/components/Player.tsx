import React from "react"
import { ReactElement } from "react-markdown/lib/react-markdown";

type Player = {
    audioUrl: string
} & Partial<Element>

const Player: React.FC<Player> = (props: Player): ReactElement => {
    return <>
        <div
            className="flex-auto self-center"
        >
            <audio
                controls
                src={props.audioUrl}
            >
                Your browser does not support the
                <code>audio</code> element.
            </audio>
        </div>
    </>
}

export default Player;