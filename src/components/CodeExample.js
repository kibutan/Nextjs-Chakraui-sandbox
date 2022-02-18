import { Code,Stack } from '@chakra-ui/react'

export default function CodeExample(){
    return(
        <>
            <Code>Hello world</Code>

            <Stack direction='row'>
                <Code>console.log(welcome)</Code>
                <Code colorScheme='red'>var chakra = &#39;awesome!&#39;</Code>
                <Code colorScheme='yellow'>npm install chakra </Code>
            </Stack>
        </>
    )
}