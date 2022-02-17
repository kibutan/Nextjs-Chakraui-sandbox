import { useBreakpointValue,VStack,Text,Button } from '@chakra-ui/react'

export default function UseBreakpointValueExample(){
    function Example() {
        const variant = useBreakpointValue({ base: 'outline', md: 'solid' })
      
        return (
          <VStack align='flex-start'>
            <Text>Resize your window to see the button variant change</Text>
            <Button colorScheme='teal' variant={variant}>Button</Button>
          </VStack>
        )
    }
    
    return(
        <>
            <Example />
        </>
    )
}