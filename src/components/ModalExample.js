import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,Button,useDisclosure,Box,Text,FormControl,Input,FormLabel,Radio,Stack,RadioGroup } from '@chakra-ui/react'
import Lorem from "react-lorem-ipsum"

import React from 'react'
export default function ModalExample(){
    function BasicUsage() {
        const { isOpen, onOpen, onClose } = useDisclosure()
        return (
          <>
            <Button onClick={onOpen}>Open Modal</Button>
      
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Lorem count={2} />
                </ModalBody>
      
                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
    }
    function ReturnFocus() {
        const { isOpen, onOpen, onClose } = useDisclosure()
        const finalRef = React.useRef()
      
        return (
          <>
            <Box ref={finalRef} tabIndex={-1} aria-label='Focus moved to this box'>
              Some other content that'll receive focus on close.
            </Box>
      
            <Button mt={4} onClick={onOpen}>
              Open Modal
            </Button>
            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Lorem count={2} />
                </ModalBody>
      
                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
    }

    function BasicUsage2() {
        const { isOpen, onOpen, onClose } = useDisclosure()
      
        return (
          <>
            <Button onClick={onOpen}>Open Modal</Button>
      
            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text fontWeight='bold' mb='1rem'>
                    You can scroll the content behind the modal
                  </Text>
                  <Lorem count={2} />
                </ModalBody>
      
                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
    }
    function InitialFocus() {
        const { isOpen, onOpen, onClose } = useDisclosure()
      
        const initialRef = React.useRef()
        const finalRef = React.useRef()
      
        return (
          <>
            <Button onClick={onOpen}>Open Modal</Button>
            <Button ml={4} ref={finalRef}>
              I'll receive focus on close
            </Button>
      
            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Create your account</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel>First name</FormLabel>
                    <Input ref={initialRef} placeholder='First name' />
                  </FormControl>
      
                  <FormControl mt={4}>
                    <FormLabel>Last name</FormLabel>
                    <Input placeholder='Last name' />
                  </FormControl>
                </ModalBody>
      
                <ModalFooter>
                  <Button colorScheme='blue' mr={3}>
                    Save
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
    }

    function ManualClose() {
        const { isOpen, onOpen, onClose } = useDisclosure()
      
        return (
          <>
            <Button onClick={onOpen}>Open Modal</Button>
      
            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Create your account</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <Lorem count={2} />
                </ModalBody>
      
                <ModalFooter>
                  <Button colorScheme='blue' mr={3}>
                    Save
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
    }

    function VerticallyCenter() {
        const { isOpen, onOpen, onClose } = useDisclosure()
      
        return (
          <>
            <Button onClick={onOpen}>Trigger modal</Button>
      
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Lorem count={2} />
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
    }

    function TransitionExample() {
        const { isOpen, onOpen, onClose } = useDisclosure()
        return (
          <>
            <Button onClick={onOpen}>Open Modal</Button>
            <Modal
              isCentered
              onClose={onClose}
              isOpen={isOpen}
              motionPreset='slideInBottom'
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Lorem count={2} />
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
    }

    function ScrollingExample() {
        const { isOpen, onOpen, onClose } = useDisclosure()
        const [scrollBehavior, setScrollBehavior] = React.useState('inside')
      
        const btnRef = React.useRef()
        return (
          <>
            <RadioGroup value={scrollBehavior} onChange={setScrollBehavior}>
              <Stack direction='row'>
                <Radio value='inside'>inside</Radio>
                <Radio value='outside'>outside</Radio>
              </Stack>
            </RadioGroup>
      
            <Button mt={3} ref={btnRef} onClick={onOpen}>
              Trigger modal
            </Button>
      
            <Modal
              onClose={onClose}
              finalFocusRef={btnRef}
              isOpen={isOpen}
              scrollBehavior={scrollBehavior}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Lorem count={15} />
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
    }

    function SizeExample() {
        const { isOpen, onOpen, onClose } = useDisclosure()
        const [size, setSize] = React.useState('md')
      
        const handleSizeClick = (newSize) => {
          setSize(newSize)
          onOpen()
        }
      
        const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']
      
        return (
          <>
            {sizes.map((size) => (
              <Button
                onClick={() => handleSizeClick(size)}
                key={size}
                m={4}
              >{`Open ${size} Modal`}</Button>
            ))}
      
            <Modal onClose={onClose} size={size} isOpen={isOpen}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Lorem count={2} />
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
    }

    function BackdropExample() {
        const OverlayOne = () => (
          <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
          />
        )
      
        const OverlayTwo = () => (
          <ModalOverlay
            bg='none'
            backdropFilter='auto'
            backdropInvert='80%'
            backdropBlur='2px'
          />
        )
      
        const { isOpen, onOpen, onClose } = useDisclosure()
        const [overlay, setOverlay] = React.useState(<OverlayOne />)
      
        return (
          <>
            <Button
              onClick={() => {
                setOverlay(<OverlayOne />)
                onOpen()
              }}
            >
              Use Overlay one
            </Button>
            <Button
              ml='4'
              onClick={() => {
                setOverlay(<OverlayTwo />)
                onOpen()
              }}
            >
              Use Overlay two
            </Button>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
              {overlay}
              <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text>Custom backdrop filters!</Text>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
    }
    return(
        <>
            <BasicUsage />
            <ReturnFocus />
            <BasicUsage2 />
            <InitialFocus />
            <ManualClose />
            <VerticallyCenter />
            <TransitionExample />
            <ScrollingExample /><br />
            <SizeExample /><br />
            <BackdropExample />
        </>
    )
}