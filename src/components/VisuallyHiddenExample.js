import { VisuallyHidden, VisuallyHiddenInput,Button,Box,Heading } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
export default function VisuallyHiddenExample(){
    function Example() {
        return (
          <Button>
            <VisuallyHidden>Checkmark</VisuallyHidden>
            <CheckIcon />
          </Button>
        )
    }
    function Example2() {
        return (
          <Box>
            <Heading>Title and description</Heading>
            <VisuallyHidden>This will be hidden</VisuallyHidden>
          </Box>
        )
      }
    function Example3() {
        return (
          <VisuallyHiddenInput
            defaultChecked
            onChange={(event) => {
              console.log(event.target.checked)
            }}
          />
        )
      }
    return(
        <>
            <Example />
            <Example2 />
        </>
    )
}