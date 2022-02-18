import { useOutsideClick } from '@chakra-ui/react'
import React from 'react'

export default function UseOutSideClickExample(){
    function Example() {
        const ref = React.useRef()
        const [isModalOpen, setIsModalOpen] = React.useState(false)
        useOutsideClick({
            ref: ref,
            handler: () => setIsModalOpen(false),
        })
      
        return (
            <>
                {isModalOpen ? (
                <div ref={ref}>
                    👋 Hey, I&apos;m a modal. Click anywhere outside of me to close.
                </div>
                ) : (
                <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
                )}
            </>
        )
    }
    return(
        <>
            <Example />
        </>
    )
}