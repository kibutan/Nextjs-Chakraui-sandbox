import { Box,Text } from "@chakra-ui/react"

export default function GradientBox(){
    return(<>
          <Box w="100%" h="200px" bgGradient="linear(to-r, blue.500, pink.500)">This is a gradient Box</Box>
      <Box w="100%" h="200px" bgGradient="linear(to-l, #FF0080, #7928CA)" >This is another gradient Box</Box>
      <Box w="100%" h="200px" bgGradient="linear(red.500 0%, yellow.500 10% ,  #7928CA 60%)">this is extra gradient Box</Box>
      <Text w="100%" bgGradient="linear(to-l, #FF0080, #7928CA)" bgClip="text" fontSize="6xl" fontWeight="extrabold">This is a Gradient Text</Text>
      <Box w="100%" h="200px" bgGradient={[
        "linear(to-r, blue.500, pink.500)",
      "linear(to-l, #FF0080, #7928CA)",
      "linear(red.500 0%, yellow.500 10% ,  #7928CA 60%)"
      ]}>this is a responsive gradient Box</Box>

    </>
    )
}