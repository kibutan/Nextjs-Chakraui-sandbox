import { Box,Text } from "@chakra-ui/react";

export default function SpacingBox(){
    return(
        <>
            <Box px={10}><Box bg={"red.100"}>10</Box></Box>
            <Box px={11}><Box bg={"red.100"}>11</Box></Box>
            <Box px={12}><Box bg={"red.100"}>12</Box></Box>
            <Box px={11}><Box bg={"red.100"}>13</Box></Box>
        </>)
}