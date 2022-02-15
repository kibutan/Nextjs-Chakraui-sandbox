import { Divider,Center,Stack,Text } from '@chakra-ui/react'

export default function DividerExample(){
    return(
        <>
            <Divider />
            <Divider orientation='horizontal' />
            <Divider orientation='vertical' />
            <Center height='50px'>
                <Divider orientation='vertical' />
            </Center>
            <Stack direction='row' h='100px' p={4}>
                <Divider orientation='vertical' />
                <Text>Chakra UI</Text>
            </Stack>
        </>
    )
}