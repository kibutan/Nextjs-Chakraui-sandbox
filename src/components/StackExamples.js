import { Stack, HStack, VStack, Box, StackDivider,Heading,Text } from '@chakra-ui/react'

export default function StackExample(){
    function Feature({ title, desc, ...rest }) {
        return (
          <Box p={5} shadow='md' borderWidth='1px' {...rest}>
            <Heading fontSize='xl'>{title}</Heading>
            <Text mt={4}>{desc}</Text>
          </Box>
        )
      }
      
      function StackEx() {
        return (
          <Stack spacing={8}>
            <Feature title='Plan Money' desc='The future can be even brighter but a goal without a plan is just a wish' />
            <Feature title='Save Money' desc='You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process'/>
          </Stack>
        )
      }
      function Feature2({ title, desc, ...rest }) {
        return (
          <Box p={5} shadow='md' borderWidth='1px' flex='1' borderRadius='md' {...rest}>
            <Heading fontSize='xl'>{title}</Heading>
            <Text mt={4}>{desc}</Text>
          </Box>
        )
      }
      
      function StackEx2() {
        return (
          <HStack spacing={8}>
            <Feature2 title='Plan Money' desc='The future can be even brighter but a goal without a plan is just a wish'/>
            <Feature2 title='Save Money' desc='You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings.'/>
          </HStack>
        )
      }

    return(
        <>
            <HStack spacing='24px'>
                <Box w='40px' h='40px' bg='yellow.200'>1</Box>
                <Box w='40px' h='40px' bg='tomato'>2</Box>
                <Box w='40px' h='40px' bg='pink.100'>3</Box>
            </HStack>

            <Stack direction={['column', 'row']} spacing='24px'>
                <Box w='40px' h='40px' bg='yellow.200'>1</Box>
                <Box w='40px' h='40px' bg='tomato'>2</Box>
                <Box w='40px' h='40px' bg='pink.100'>3</Box>
            </Stack>
            <VStack divider={<StackDivider borderColor='gray.200' />} spacing={4} align='stretch' >
                <Box h='40px' bg='yellow.200'>1</Box>
                <Box h='40px' bg='tomato'>2</Box>
                <Box h='40px' bg='pink.100'>3</Box>
            </VStack>
            <StackEx />
            <StackEx2 />
        </>
    )

}