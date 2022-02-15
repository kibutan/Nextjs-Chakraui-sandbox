import { Badge, Stack,Flex, Avatar,Box,Text } from '@chakra-ui/react'

export default function BadgeExample(){
    return(
        <>
            <Badge>Default</Badge>
            <Stack direction='row'>
                <Badge>Default</Badge>
                <Badge colorScheme='green'>Success</Badge>
                <Badge colorScheme='red'>Removed</Badge>
                <Badge colorScheme='purple'>New</Badge>
            </Stack>
            <Stack direction='row'>
                <Badge variant='outline' colorScheme='green'>
                    Default
                </Badge>
                <Badge variant='solid' colorScheme='green'>
                    Success
                </Badge>
                <Badge variant='subtle' colorScheme='green'>
                    Removed
                </Badge>
            </Stack>

            <Flex>
                <Avatar src='https://bit.ly/sage-adebayo' />
                <Box ml='3'>
                    <Text fontWeight='bold'>Segun Adebayo<Badge ml='1' colorScheme='green'>New</Badge></Text>
                    <Text fontSize='sm'>UI Engineer</Text>
                </Box>
            </Flex>

            <Text fontSize='xl' fontWeight='bold'>Segun Adebayo
                <Badge ml='1' fontSize='0.8em' colorScheme='green'>New</Badge>
            </Text>
        </>
    )
}