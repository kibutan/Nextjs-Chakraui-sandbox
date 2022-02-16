import { Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton, Stack, Box} from '@chakra-ui/react'

export default function AlertExample(){
    return(
        <>
            <Alert status='error'>
                <AlertIcon />
                <AlertTitle mr={2}>Your browser is outdated!</AlertTitle>
                <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
                <CloseButton position='absolute' right='8px' top='8px' />
            </Alert>

            <Stack spacing={3}>
                <Alert status='error'>
                    <AlertIcon />There was an error processing your request
                </Alert>

                <Alert status='success'>
                    <AlertIcon />Data uploaded to the server. Fire on!
                </Alert>

                <Alert status='warning'>
                    <AlertIcon />Seems your account is about expire, upgrade now
                </Alert>

                <Alert status='info'>
                    <AlertIcon />Chakra is going live on August 30th. Get ready!
                </Alert>
            </Stack>

            <Stack spacing={3}>
                <Alert status='success' variant='subtle'>
                    <AlertIcon />Data uploaded to the server. Fire on!
                </Alert>

                <Alert status='success' variant='solid'>
                    <AlertIcon />Data uploaded to the server. Fire on!
                </Alert>

                <Alert status='success' variant='left-accent'>
                    <AlertIcon />Data uploaded to the server. Fire on!
                </Alert>

                <Alert status='success' variant='top-accent'>
                    <AlertIcon />Data uploaded to the server. Fire on!
                </Alert>
            </Stack>

            <Alert status='success' variant='subtle' flexDirection='column' alignItems='center' justifyContent='center' textAlign='center' height='200px' >
                <AlertIcon boxSize='40px' mr={0} />
                <AlertTitle mt={4} mb={1} fontSize='lg'>Application submitted!</AlertTitle>
                <AlertDescription maxWidth='sm'>Thanks for submitting your application. Our team will get back to you soon.</AlertDescription>
            </Alert>

            <Alert status='success'>
                <AlertIcon />
                <Box flex='1'>
                    <AlertTitle>Success!</AlertTitle>
                    <AlertDescription display='block'>Your application has been received. We will review your application and respond within the next 48 hours.</AlertDescription>
                </Box>
                <CloseButton position='absolute' right='8px' top='8px' />
            </Alert>
        </>
    )
}