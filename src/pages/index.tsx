import { Box, chakra} from '@chakra-ui/react'
import React from 'react'
import ManyTabs from  "../components/ManyTabs"
import SpacingBox from "../components/SpacingBox"
import CardAirBnB from "../components/CardAirBnB"
export default function HomePage() {
  return (
    <>
    <Box padding={10} backgroundColor="green.500"><chakra.h1 color="tomato">this is a box. padding = 10, bg-col = green.500</chakra.h1></Box>
    <SpacingBox>Spacint Box is NANI</SpacingBox>
    <CardAirBnB>Card</CardAirBnB>
    <Box p={10} m={10}>Box that p={10} m={10} and TabLists many variants↓<ManyTabs /></Box>
    </>
  )
}
