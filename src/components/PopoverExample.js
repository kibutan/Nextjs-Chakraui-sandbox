import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverFooter, PopoverArrow, PopoverCloseButton, PopoverAnchor, Button,Portal,Box,ButtonGroup,useDisclosure,IconButton,Stack,FormControl,FormLabel,Input,RadioGroup,HStack,Radio,useBoolean } from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'
import FocusLock from "react-focus-lock"
import React from 'react'
export default function PopoverExample(){
    const TextInput = React.forwardRef((props, ref) => {
        return (
          <FormControl>
            <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
            <Input ref={ref} id={props.id} {...props} />
          </FormControl>
        )
      })
      
      // 2. Create the form
      const Form = ({ firstFieldRef, onCancel }) => {
        return (
          <Stack spacing={4}>
            <TextInput
              label='First name'
              id='first-name'
              ref={firstFieldRef}
              defaultValue='John'
            />
            <TextInput label='Last name' id='last-name' defaultValue='Smith' />
            <ButtonGroup d='flex' justifyContent='flex-end'>
              <Button variant='outline' onClick={onCancel}>
                Cancel
              </Button>
              <Button isDisabled colorScheme='teal'>
                Save
              </Button>
            </ButtonGroup>
          </Stack>
        )
      }
      
      // 3. Create the Popover
      // Ensure you set `closeOnBlur` prop to false so it doesn't close on outside click
      const PopoverForm = () => {
        const { onOpen, onClose, isOpen } = useDisclosure()
        const firstFieldRef = React.useRef(null)
      
        return (
          <>
            <Box d='inline-block' mr={3}>
              John Smith
            </Box>
            <Popover
              isOpen={isOpen}
              initialFocusRef={firstFieldRef}
              onOpen={onOpen}
              onClose={onClose}
              placement='right'
              closeOnBlur={false}
            >
              <PopoverTrigger>
                <IconButton size='sm' icon={<EditIcon />} />
              </PopoverTrigger>
              <PopoverContent p={5}>
                <FocusLock returnFocus persistentFocus={false}>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <Form firstFieldRef={firstFieldRef} onCancel={onClose} />
                </FocusLock>
              </PopoverContent>
            </Popover>
          </>
        )
    }
      
    function WalkthroughPopover() {
        const initialFocusRef = React.useRef()
        return (
          <Popover
            initialFocusRef={initialFocusRef}
            placement='bottom'
            closeOnBlur={false}
          >
            <PopoverTrigger>
              <Button>Trigger</Button>
            </PopoverTrigger>
            <PopoverContent color='white' bg='blue.800' borderColor='blue.800'>
              <PopoverHeader pt={4} fontWeight='bold' border='0'>
                Manage Your Channels
              </PopoverHeader>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </PopoverBody>
              <PopoverFooter
                border='0'
                d='flex'
                alignItems='center'
                justifyContent='space-between'
                pb={4}
              >
                <Box fontSize='sm'>Step 2 of 4</Box>
                <ButtonGroup size='sm'>
                  <Button colorScheme='green'>Setup Email</Button>
                  <Button colorScheme='blue' ref={initialFocusRef}>
                    Next
                  </Button>
                </ButtonGroup>
              </PopoverFooter>
            </PopoverContent>
          </Popover>
        )
    }

    function ControlledUsage() {
        const [isOpen, setIsOpen] = React.useState(false)
        const open = () => setIsOpen(!isOpen)
        const close = () => setIsOpen(false)
        return (
          <>
            <Button mr={5} onClick={open}>
              Trigger
            </Button>
            <Popover
              returnFocusOnClose={false}
              isOpen={isOpen}
              onClose={close}
              placement='right'
              closeOnBlur={false}
            >
              <PopoverTrigger>
                <Button colorScheme='pink'>Popover Target</Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverHeader fontWeight='semibold'>Confirmation</PopoverHeader>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  Are you sure you want to continue with your action?
                </PopoverBody>
                <PopoverFooter d='flex' justifyContent='flex-end'>
                  <ButtonGroup size='sm'>
                    <Button variant='outline'>Cancel</Button>
                    <Button colorScheme='red'>Apply</Button>
                  </ButtonGroup>
                </PopoverFooter>
              </PopoverContent>
            </Popover>
          </>
        )
    }

    function WithPopoverAnchor() {
        const [isEditing, setIsEditing] = useBoolean()
        const [color, setColor] = React.useState('red')
      
        return (
          <Popover
            isOpen={isEditing}
            onOpen={setIsEditing.on}
            onClose={setIsEditing.off}
            closeOnBlur={false}
            isLazy
            lazyBehavior='keepMounted'
          >
            <HStack>
              <PopoverAnchor>
                <Input
                  color={color}
                  w='auto'
                  display='inline-flex'
                  isDisabled={!isEditing}
                  defaultValue='Popover Anchor'
                />
              </PopoverAnchor>
      
              <PopoverTrigger>
                <Button h='40px' colorScheme='pink'>
                  {isEditing ? 'Save' : 'Edit'}
                </Button>
              </PopoverTrigger>
            </HStack>
      
            <PopoverContent>
              <PopoverBody>
                Colors:
                <RadioGroup value={color} onChange={(newColor) => setColor(newColor)}>
                  <Radio value='red'>red</Radio>
                  <Radio value='blue'>blue</Radio>
                  <Radio value='green'>green</Radio>
                  <Radio value='purple'>purple</Radio>
                </RadioGroup>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        )
    }

    function InternalStateEx() {
        const initRef = React.useRef()
        return (
          <Popover closeOnBlur={false} placement='left' initialFocusRef={initRef}>
            {({ isOpen, onClose }) => (
              <>
                <PopoverTrigger>
                  <Button>Click to {isOpen ? 'close' : 'open'}</Button>
                </PopoverTrigger>
                <Portal>
                  <PopoverContent>
                    <PopoverHeader>This is the header</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <Box>
                        Hello. Nice to meet you! This is the body of the popover
                      </Box>
                      <Button
                        mt={4}
                        colorScheme='blue'
                        onClick={onClose}
                        ref={initRef}
                      >
                        Close
                      </Button>
                    </PopoverBody>
                    <PopoverFooter>This is the footer</PopoverFooter>
                  </PopoverContent>
                </Portal>
              </>
            )}
          </Popover>
        )
    }
    return(
        <>
            <Popover>
                <PopoverTrigger>
                    <Button>Trigger</Button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Confirmation!</PopoverHeader>
                    <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
                </PopoverContent>
            </Popover>

            <Popover>
                <PopoverTrigger>
                    <Button>Trigger</Button>
                </PopoverTrigger>
                <Portal>
                    <PopoverContent>
                    <PopoverArrow />
                    <PopoverHeader>Header</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                        <Button colorScheme='blue'>Button</Button>
                    </PopoverBody>
                    <PopoverFooter>This is the footer</PopoverFooter>
                    </PopoverContent>
                </Portal>
            </Popover>

            <WalkthroughPopover />
            <PopoverForm />
            <ControlledUsage />
            <WithPopoverAnchor />
            <InternalStateEx />

            <Popover>
                <PopoverTrigger>
                    <Box tabIndex='0' role='button' aria-label='Some box' p={5} w='120px' bg='gray.300' children='Click' />
                </PopoverTrigger>
                <PopoverContent bg='tomato' color='white'>
                    <PopoverHeader fontWeight='semibold'>Customization</PopoverHeader>
                    <PopoverArrow bg='pink.500' />
                    <PopoverCloseButton bg='purple.500' />
                    <PopoverBody>Tadaa!! The arrow color and background color is customized. Check the props for each component.</PopoverBody>
                </PopoverContent>
            </Popover>

            <Popover placement='top-start'>
                <PopoverTrigger>
                <Button>Click me</Button>
                </PopoverTrigger>
                <PopoverContent>
                <PopoverHeader fontWeight='semibold'>Popover placement</PopoverHeader>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</PopoverBody>
                </PopoverContent>
            </Popover>

            <Popover isLazy>
                <PopoverTrigger>
                    <Button>Click me</Button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverHeader fontWeight='semibold'>Popover placement</PopoverHeader>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</PopoverBody>
                </PopoverContent>
            </Popover>
        </>
    )
}