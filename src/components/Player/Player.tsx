import React from "react"
import ReactPlayer from "react-player";

const Player = (props: Player) => {
    return <div
            className={`${props.className ?? ''} flex-grow self-center h-10 w-full`}
        >
            <ReactPlayer url={props.src} controls height='inherit' width='inherit' title='audio-player' config={{
                file: {
                    forceAudio: true
                }
            }}/>
        </div>
}

export default Player;