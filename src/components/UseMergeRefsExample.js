import { useMergeRefs,Box,useDisclosure,usePopper,useOutsideClick} from '@chakra-ui/react'
import React from 'react'
export default function UseMergeRefsExample(){
    function Example({ ref, ...props }) {
        const internalRef = React.useRef()
        const refs = useMergeRefs(internalRef, ref)
      
        return (
            <div {...props} ref={refs}>
                A div with multiple refs.
            </div>
            )
    }

    function Example2({ ref, ...props }) {
        const outsideRef = React.useRef()
        const { isOpen, onOpen, onClose } = useDisclosure()
        const { popperRef, referenceRef } = usePopper()
      
        useOutsideClick({
            ref: outsideRef,
            handler: () => isOpen && onClose(),
        })
      
        const buttonEl = useMergeRefs(outsideRef, referenceRef)
      
        return (
            <>
                <button ref={buttonEl} onClick={onOpen}>
                    Click me to see the popover
                </button>
                {isOpen && (
                    <Box ref={popperRef} bg='green'>
                        Click outside to close me
                    </Box>
            )}
            </>
        )
    }
    return (
        <>
            <Example />
            <Example2 />
        </>
    )
}