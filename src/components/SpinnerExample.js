import { Spinner , Stack} from '@chakra-ui/react'

export default function  SpinnerExample(){
    return(
        <>
            <Spinner />
            <Spinner color='red.500' />
            <Spinner color='red.500' />
            <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
            
        </>
    )
}