import { Fade, ScaleFade, Slide, SlideFade, Button, Box, Collapse } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import React from 'react'
import Lorem from 'react-lorem-ipsum'
export default function TransitionsExample(){
    function FadeEx() {
        const { isOpen, onToggle } = useDisclosure()
      
        return (
          <>
            <Button onClick={onToggle}>Click Me</Button>
            <Fade in={isOpen}>
              <Box p='40px' color='white' mt='4' bg='teal.500' rounded='md' shadow='md'>Fade</Box>
            </Fade>
          </>
        )
    }
    function ScaleFadeEx() {
        const { isOpen, onToggle } = useDisclosure()
      
        return (
            <>
                <Button onClick={onToggle}>Click Me</Button>
                <ScaleFade initialScale={0.9} in={isOpen}>
                <Box p='40px' color='white' mt='4' bg='teal.500' rounded='md' shadow='md' >Fade</Box>
                </ScaleFade>
            </>
        )
    }

    function SlideEx() {
        const { isOpen, onToggle } = useDisclosure()
      
        return (
          <>
            <Button onClick={onToggle}>Click Me</Button>
            <Slide direction='bottom' in={isOpen} style={{ zIndex: 10 }}>
              <Box
                p='40px'
                color='white'
                mt='4'
                bg='teal.500'
                rounded='md'
                shadow='md'
              >
                <Lorem count={2} />
              </Box>
            </Slide>
          </>
        )
    }

    function SlideFadeEx() {
        const { isOpen, onToggle } = useDisclosure()
      
        return (
          <>
            <Button onClick={onToggle}>Click Me</Button>
            <SlideFade in={isOpen} offsetY='20px'>
              <Box
                p='40px'
                color='white'
                mt='4'
                bg='teal.500'
                rounded='md'
                shadow='md'
              >
                <Lorem count={1} />
              </Box>
            </SlideFade>
          </>
        )
    }
    function CollapseEx() {
        const { isOpen, onToggle } = useDisclosure()
      
        return (
          <>
            <Button onClick={onToggle}>Click Me</Button>
            <Collapse in={isOpen} animateOpacity>
              <Box
                p='40px'
                color='white'
                mt='4'
                bg='teal.500'
                rounded='md'
                shadow='md'
              >
                <Lorem count={1} />
              </Box>
            </Collapse>
          </>
        )
    }

    function Example() {
        const [show, setShow] = React.useState(false)
      
        const handleToggle = () => setShow(!show)
      
        return (
          <>
            <Collapse startingHeight={20} in={show}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
              terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
              labore wes anderson cred nesciunt sapiente ea proident.
            </Collapse>
            <Button size='sm' onClick={handleToggle} mt='1rem'>
              Show {show ? 'Less' : 'More'}
            </Button>
          </>
        )
    }
    return(
        <>
            <FadeEx />
            <ScaleFadeEx />
            <SlideEx />
            <SlideFadeEx />
            <CollapseEx />
            <Example />
        </>
    )
}