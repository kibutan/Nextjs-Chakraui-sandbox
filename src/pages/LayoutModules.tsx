import { Box, chakra, useColorMode} from '@chakra-ui/react'
import React from 'react'
// import Link from 'next/link'
// import ManyTabs from  "../components/ManyTabs"
import SpacingBox from "../components/SpacingBox"
import CardAirBnB from "../components/CardAirBnB"
import GradientBox from "../components/GradientBox"
import AspectRatioExample from "../components/AspectRatioExample"
import CenterExample from "../components/CenterExample"
import ContainerExample from "../components/ContainerExample"
import FlexExample from "../components/FlexExample"
import BadgeExample from "../components/BadgeExample"
import GridExample from "../components/GridExample"
import SimpleGridExample from "../components/SimpleGridExample"
import StackExamples from "../components/StackExamples"
import WrapExample from "../components/WrapExample"

export default function HomePage() {
  const {colorMode,toggleColorMode } = useColorMode()

  return (
    <>
    
    {/* <Link href="/post"></Link> */}
    <Box padding={10} backgroundColor="green.500"><chakra.h1 color="tomato">this is a box. padding = 10, bg-col = green.500</chakra.h1></Box>
    <SpacingBox />
    {/* <Box p={10} m={10}>Box that p={10} m={10} and TabLists many variants↓<ManyTabs /></Box> */}
    <GradientBox></GradientBox>
    {/* <CardAirBnB>Card</CardAirBnB> */}
    <AspectRatioExample />
    <CardAirBnB />
    <CenterExample />
    <ContainerExample />
    <FlexExample />
    <BadgeExample />
    <GridExample />
    <SimpleGridExample />
    <StackExamples />
    <WrapExample />
    </>
  )
}
