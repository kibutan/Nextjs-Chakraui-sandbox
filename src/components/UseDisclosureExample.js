import { useDisclosure,Button,Drawer,DrawerOverlay,DrawerContent,DrawerHeader,DrawerBody } from '@chakra-ui/react'
export default function UseDisclosureExample(){
    function Example() {
        const { isOpen, onOpen, onClose } = useDisclosure()
      
        return (
            <>
                <Button onClick={onOpen}>Open Drawer</Button>
                <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                    <DrawerBody>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    </DrawerBody>
                </DrawerContent>
                </Drawer>
            </>
            )
        }
    return(
        <>
            <Example />
        </>
    )
}