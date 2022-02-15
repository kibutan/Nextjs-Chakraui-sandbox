import { Container,VStack,Box } from '@chakra-ui/react'

export default function ContainerExample(){
    return(
        <>
            <Container>
                There are many benefits to a joint design and development system. Not only
                does it bring benefits to the design team, but it also brings benefits to
                engineering teams. It makes sure that our experiences have a consistent look
                and feel, not just in our design specs, but in production
            </Container>
            <VStack>
                <Container maxW='container.xl'>Extra-Large Container</Container>
                <Container maxW='container.lg'>Large Container</Container>
                <Container maxW='container.md'>Medium Container</Container>
                <Container maxW='container.sm'>Small Container</Container>
            </VStack>
            <Container maxW='xl' centerContent>
                <Box padding='4' bg='gray.100' maxW='3xl' color="red.500">
                There are many benefits to a joint design and development system. Not only
                does it bring benefits to the design team.
                </Box>
            </Container>
        </>
    )
}