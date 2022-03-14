import React from 'react'

const CardHolder = (props: CardHolderProps) => {
    return (<>
        <div
            className={`${props.className} flex flex-row flex-wrap justify-center max-w-fit gap-8 self-center px-10 py-5`}
        >
            {props.children}
        </div>
    </>)
}

export default CardHolder;