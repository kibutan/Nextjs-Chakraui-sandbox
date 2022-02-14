import { Box, chakra, useColorMode, MoonIcon} from '@chakra-ui/react'
import React from 'react'
// import Link from 'next/link'
import ManyTabs from  "../components/ManyTabs"
import SpacingBox from "../components/SpacingBox"
import CardAirBnB from "../components/CardAirBnB"
import GradientBox from "../components/GradientBox"
export default function HomePage() {
  const {colorMode,toggleColorMode } = useColorMode()

  return (
    <>
    <Box as="button" p={4} color="white" fontWeight="bold" borderRadius="md" bgGradient="linear(to-r,blue.500,yellow.500)" _hover={{
      bgGradient:"linear(to-r,red.500,green.500)"
    }} onClick={toggleColorMode}>I'm in {colorMode === "dark"?  "Nightmare": "Heavenly"} Mode</Box>
    {/* <Link href="/post"></Link> */}
    <Box padding={10} backgroundColor="green.500"><chakra.h1 color="tomato">this is a box. padding = 10, bg-col = green.500</chakra.h1></Box>
    <SpacingBox>Spacint Box is NANI</SpacingBox>
    <Box p={10} m={10}>Box that p={10} m={10} and TabLists many variants↓<ManyTabs /></Box>
    <GradientBox></GradientBox>
    {/* <CardAirBnB>Card</CardAirBnB> */}
    </>
  )
}
