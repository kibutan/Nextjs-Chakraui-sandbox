import { useToast,Button,Box,Stack,Wrap,WrapItem,createStandaloneToast } from '@chakra-ui/react'
import React from 'react'

export default function ToastExample(){
    const toast = useToast()
    const toast2 = createStandaloneToast()
    const toastIdRef = React.useRef()
    const statuses = ['success', 'error', 'warning', 'info']
    const variants = ['solid', 'subtle', 'left-accent', 'top-accent']
    const positions = [ 'top', 'top-right', 'top-left', 'bottom', 'bottom-right', 'bottom-left', ]
    const id = 'test-toast'
    function close() {
        if (toastIdRef.current) {
            toast.close(toastIdRef.current)
        }
    }
    toast2({
        title: 'An error occurred.',
        description: 'Unable to create user account.',
        status: 'error',
        duration: 9000,
        isClosable: true,
    })
    function closeAll() {
        // you may optionally pass an object of positions to exclusively close
        // keeping other positions opened
        // e.g. `{ positions: ['bottom'] }`
        toast.closeAll()
    }
    
    function addToast() {
        toastIdRef.current = toast({ description: 'some text' })
    }

    function update() {
        if (toastIdRef.current) {
            toast.update(toastIdRef.current, { description: 'new text' })
        }
    }
    return(
        <>
            <Button
                onClick={() => toast({ 
                    title: 'Account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                    })
                }
                >Show Toast
            </Button>

            <Button
                onClick={() => toast({ position: 'bottom-left',
                    render: () => (
                        <Box color='white' p={3} bg='blue.500'>Hello World</Box>
                    ),
                })}>Show Toast2
            </Button>

            <Stack isInline spacing={2}>
                <Button onClick={addToast} type='button'>Toast 3</Button>
                <Button onClick={close} type='button' variant='outline'>Close last toast</Button>
                <Button onClick={closeAll} type='button' variant='outline'>Close all toasts</Button>
                <Button onClick={update} type='button' variant='outline'>Update last toast</Button>
            </Stack>

            <Wrap>
                {statuses.map((status, i) => (
                    <WrapItem key={i}>
                    <Button
                        onClick={() =>
                        toast({
                            title: `${status} toast`,
                            status: status,
                            isClosable: true,
                        })
                        }
                    >
                        Show {status} toast
                    </Button>
                    </WrapItem>
                ))}
            </Wrap>

            <Wrap>
                {variants.map((variant, i) => (
                    <WrapItem key={i}>
                    <Button
                        onClick={() =>
                        toast({
                            title: `${variant} toast`,
                            variant: variant,
                            isClosable: true,
                        })
                        }
                    >
                        Show {variant} toast
                    </Button>
                    </WrapItem>
                ))}
            </Wrap>

            <Button
                onClick={() => {
                    toast({
                        isClosable: true,
                        position: 'top',
                        title: 'Container style is updated',
                        containerStyle: {
                            width: '800px',
                            maxWidth: '100%',
                            border: '20px solid red',            
                        },
                    })
                }}
                >
            Click me to show toast with custom container style.
            </Button>

            <Wrap>
                {positions.map((position, i) => (
                    <WrapItem key={i}>
                    <Button
                        onClick={() =>
                        toast({
                            title: `${position} toast`,
                            position: position,
                            isClosable: true,
                        })
                        }
                    >
                        Show {position} toast
                    </Button>
                    </WrapItem>
                ))}
            </Wrap>

            <Button
                onClick={() => {
                    if (!toast.isActive(id)) {
                    toast({
                        id,
                        title: 'Hey! You can create a duplicate toast',
                    })
                    }
                }}
                >
                Click me!
            </Button>
        </>
    )
}