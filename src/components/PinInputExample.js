import { PinInput, PinInputField,HStack,Stack } from '@chakra-ui/react'

export default function PinInputExample(){
    return(
        <>
            <HStack>
                <PinInput>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                </PinInput>
            </HStack>

            <HStack>
                <PinInput type='alphanumeric'>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                </PinInput>
            </HStack>

            <PinInput otp>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
            </PinInput>

            <HStack>
                <PinInput type='alphanumeric' mask>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                </PinInput>
            </HStack>

            <Stack>
                <HStack>
                    <PinInput size='xs'>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    </PinInput>
                </HStack>

                <HStack>
                    <PinInput size='sm'>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    </PinInput>
                </HStack>

                <HStack>
                    <PinInput size='md'>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    </PinInput>
                </HStack>

                <HStack>
                    <PinInput size='lg'>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    </PinInput>
                </HStack>
            </Stack>

            <HStack>
                <PinInput defaultValue='234'>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                </PinInput>
            </HStack>

            <HStack>
                <PinInput defaultValue='23'>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                </PinInput>
            </HStack>

            <HStack>
                <PinInput placeholder='🥳'>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                </PinInput>
            </HStack>

            <HStack>
                <PinInput manageFocus={false}>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                </PinInput>
            </HStack>
        </>
    )
}