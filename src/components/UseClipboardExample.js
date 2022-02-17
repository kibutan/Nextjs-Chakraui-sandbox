import { useClipboard,Flex, Input, Button, Editable,EditablePreview, EditableInput } from '@chakra-ui/react'
import React from 'react'
export default function UseClipboardExample(){
    function Example() {
        const [value, setValue] = React.useState('Hello world')
        const { hasCopied, onCopy } = useClipboard(value)
      
        return (
            <>
                <Flex mb={2}>
                <Input value={value} isReadOnly placeholder='Welcome' />
                <Button onClick={onCopy} ml={2}>
                    {hasCopied ? 'Copied' : 'Copy'}
                </Button>
                </Flex>
                <Editable placeholder='Paste here'>
                <EditablePreview width='100%' />
                <EditableInput />
                </Editable>
            </>
            )
        }
    return(
        <>
            <Example />
        </>
    )
}