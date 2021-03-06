import {Drawer,DrawerBody,DrawerFooter,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,RadioGroup,Radio,Stack,Button,
Box,FormLabel,Textarea,Input, InputGroup,InputLeftAddon,InputRightAddon, Select,useDisclosure} from '@chakra-ui/react'
import React from 'react'
import { AddIcon } from '@chakra-ui/icons'
export default function DrawerExample(){
    function PlacementExample() {
        const { isOpen, onOpen, onClose } = useDisclosure()
        const [placement, setPlacement] = React.useState('right')
      
        return (
          <>
            <RadioGroup defaultValue={placement} onChange={setPlacement}>
              <Stack direction='row' mb='4'>
                <Radio value='top'>Top</Radio>
                <Radio value='right'>Right</Radio>
                <Radio value='bottom'>Bottom</Radio>
                <Radio value='left'>Left</Radio>
              </Stack>
            </RadioGroup>
            <Button colorScheme='blue' onClick={onOpen}>
              Open
            </Button>
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
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

    function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
    
    return (
        <>
        <Button leftIcon={<AddIcon />} colorScheme='teal' onClick={onOpen}>
            Create user
        </Button>
        <Drawer
            isOpen={isOpen}
            placement='right'
            initialFocusRef={firstField}
            onClose={onClose}
        >
            <DrawerOverlay />
            <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px'>
                Create a new account
            </DrawerHeader>
    
            <DrawerBody>
                <Stack spacing='24px'>
                <Box>
                    <FormLabel htmlFor='username'>Name</FormLabel>
                    <Input
                    ref={firstField}
                    id='username'
                    placeholder='Please enter user name'
                    />
                </Box>
    
                <Box>
                    <FormLabel htmlFor='url'>Url</FormLabel>
                    <InputGroup>
                    <InputLeftAddon>http://</InputLeftAddon>
                    <Input
                        type='url'
                        id='url'
                        placeholder='Please enter domain'
                    />
                    <InputRightAddon>.com</InputRightAddon>
                    </InputGroup>
                </Box>
    
                <Box>
                    <FormLabel htmlFor='owner'>Select Owner</FormLabel>
                    <Select id='owner' defaultValue='segun'>
                    <option value='segun'>Segun Adebayo</option>
                    <option value='kola'>Kola Tioluwani</option>
                    </Select>
                </Box>
    
                <Box>
                    <FormLabel htmlFor='desc'>Description</FormLabel>
                    <Textarea id='desc' />
                </Box>
                </Stack>
            </DrawerBody>
    
            <DrawerFooter borderTopWidth='1px'>
                <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
                </Button>
                <Button colorScheme='blue'>Submit</Button>
            </DrawerFooter>
            </DrawerContent>
        </Drawer>
        </>
    )
    }

    function SizeExample() {
    const [size, setSize] = React.useState('md')
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const handleClick = (newSize) => {
        setSize(newSize)
        onOpen()
    }
    
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']
    
    return (
        <>
        {sizes.map((size) => (
            <Button
            onClick={() => handleClick(size)}
            key={size}
            m={4}
            >{`Open ${size} Drawer`}</Button>
        ))}
    
        <Drawer onClose={onClose} isOpen={isOpen} size={size}>
            <DrawerOverlay />
            <DrawerContent>
            <DrawerHeader>{`${size} drawer contents`}</DrawerHeader>
            <DrawerBody>
                {size === 'full'
                ? `You're trapped ???? , refresh the page to leave or press 'Esc' key.`
                : null}
            </DrawerBody>
            </DrawerContent>
        </Drawer>
        </>
    )
    }

    function UsingFormInDrawerExample(){
        const { isOpen, onOpen, onClose } = useDisclosure()
        return (
            <>
            <Button onClick={onOpen}>UsingFormInDrawerExample</Button>
            <Drawer isOpen={isOpen} onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Create your account</DrawerHeader>

                <DrawerBody>
                    <form
                    id='my-form'
                    onSubmit={(e) => {
                        e.preventDefault()
                        console.log('submitted')
                    }}
                    >
                    <Input name='nickname' placeholder='Type here...' />
                    </form>
                </DrawerBody>

                <DrawerFooter>
                    <Button type='submit' form='my-form'>
                    Save
                    </Button>
                </DrawerFooter>
                </DrawerContent>
            </Drawer>
            </>
        )
    }
      return(
          <>
            <PlacementExample />
            <DrawerExample />
            <SizeExample /><br />
            <UsingFormInDrawerExample />
          </>
      )
}