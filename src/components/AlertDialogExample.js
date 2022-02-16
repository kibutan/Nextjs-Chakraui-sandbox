import {AlertDialog, AlertDialogBody, AlertDialogFooter,AlertDialogHeader,AlertDialogContent,AlertDialogOverlay,AlertDialogCloseButton,Button,useDisclosure  } from '@chakra-ui/react'
import React from 'react'
export default function AlertDialogExample() {
    function AlertDialogExample() {
        const [isOpen, setIsOpen] = React.useState(false)
        const onClose = () => setIsOpen(false)
        const cancelRef = React.useRef()
      
        return (
          <>
            <Button colorScheme='red' onClick={() => setIsOpen(true)}>
              Delete Customer
            </Button>
      
            <AlertDialog
              isOpen={isOpen}
              leastDestructiveRef={cancelRef}
              onClose={onClose}
            >
              <AlertDialogOverlay>
                <AlertDialogContent>
                  <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                    Delete Customer
                  </AlertDialogHeader>
      
                  <AlertDialogBody>
                    Are you sure? You can't undo this action afterwards.
                  </AlertDialogBody>
      
                  <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                      Cancel
                    </Button>
                    <Button colorScheme='red' onClick={onClose} ml={3}>
                      Delete
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialogOverlay>
            </AlertDialog>
          </>
        )
      }
    function TransitionExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    
    return (
        <>
        <Button onClick={onOpen}>Discard</Button>
        <AlertDialog
            motionPreset='slideInBottom'
            leastDestructiveRef={cancelRef}
            onClose={onClose}
            isOpen={isOpen}
            isCentered
        >
            <AlertDialogOverlay />
    
            <AlertDialogContent>
            <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
                Are you sure you want to discard all of your notes? 44 words will be
                deleted.
            </AlertDialogBody>
            <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                No
                </Button>
                <Button colorScheme='red' ml={3}>
                Yes
                </Button>
            </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
        </>
    )
    }

    return(
        <>
        <AlertDialogExample />
        <TransitionExample />
        </>
    )

  }