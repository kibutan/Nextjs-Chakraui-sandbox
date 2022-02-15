import { Switch,FormControl,FormLabel,Stack } from '@chakra-ui/react'

export default function SwitchExample(){
    return(
    <>
        <FormControl display='flex' alignItems='center'>
            <FormLabel htmlFor='email-alerts' mb='0'>
                Enable email alerts?
            </FormLabel>
            <Switch id='email-alerts' />
        </FormControl>

        <Stack align='center' direction='row'>
            <Switch size='sm' />
            <Switch size='md' />
            <Switch size='lg' />
        </Stack>

        <Stack direction='row'>
            <Switch colorScheme='red' />
            <Switch colorScheme='teal' size='lg' />
        </Stack>
    </>
    )
}