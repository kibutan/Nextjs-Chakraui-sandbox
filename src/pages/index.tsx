import { Box, chakra, useColorMode} from '@chakra-ui/react'
import React from 'react'
// import Link from 'next/link'


import LayoutModules from "./LayoutModules"
import FormsModules from './FormsModules'
import DataDisplayModules from "./DataDisplayModules"
import FeedbackModules from './FeedbackModules'
import TextModules from './TextModules'
import OverlayModules from "./OverlayModules"
import DisclosureModules from "./DisclosureModules"
import NavigationModules from "./NavigationModules"
import MediaAndIconsModules from "./MediaAndIconsModules"
import OthersModules from "./OthersModules"
import HooksModules from "./HooksModules"
export default function HomePage() {

  const {colorMode,toggleColorMode } = useColorMode()
  return (
    <>
      <Box as="button" p={4} color="white" fontWeight="bold" borderRadius="md" bgGradient="linear(to-r,blue.500,yellow.500)" _hover={{bgGradient:"linear(to-r,red.500,green.500)"}} onClick={toggleColorMode}>I am in {colorMode === "dark"?  "Dark": "Light"} Mode</Box>
      <LayoutModules />
      <FormsModules />
      <DataDisplayModules />
      <FeedbackModules />
      <TextModules />
      <OverlayModules />
      <DisclosureModules />
      <NavigationModules />
      <MediaAndIconsModules />
      <OthersModules />
      <HooksModules />
    </>
  )
}
