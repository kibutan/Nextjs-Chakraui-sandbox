import { CloseButton, Stack } from '@chakra-ui/react'
export default function CloseButtonExample(){
    return(
        <>
            <CloseButton />
            <Stack direction='row' spacing={6}>
                <CloseButton size='sm' />
                <CloseButton size='md' />
                <CloseButton size='lg' />
            </Stack>
        </>
    )
}