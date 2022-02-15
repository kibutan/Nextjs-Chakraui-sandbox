import { Box, chakra, useColorMode} from '@chakra-ui/react'
import React from 'react'
// import Link from 'next/link'

import LayoutModules from "./LayoutModules"
import FormsModules from './FormsModules'
import DataDisplayModules from "./DataDisplayModules"
export default function HomePage() {
  const {colorMode,toggleColorMode } = useColorMode()
  return (
    <>
      <Box as="button" p={4} color="white" fontWeight="bold" borderRadius="md" bgGradient="linear(to-r,blue.500,yellow.500)" _hover={{
      bgGradient:"linear(to-r,red.500,green.500)"
    }} onClick={toggleColorMode}>I'm in {colorMode === "dark"?  "Nightmare": "Heavenly"} Mode</Box>
      <LayoutModules />
      <FormsModules />
      <DataDisplayModules />
    </>
  )
}
