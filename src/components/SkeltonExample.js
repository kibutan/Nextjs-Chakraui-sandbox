import { Skeleton, SkeletonCircle, SkeletonText ,Stack ,Box, Heading,} from '@chakra-ui/react'
import HomePage from 'src/pages'
// import { useRemoteData } from 'react' 
export default function SkeltonExample(){
    // const { data, loading, error } = useRemoteData()
    
    // function useRemoteData(){
    //     return {'title':'Hoge'},"huga","hege"
    // }
    // if (error) return <Box children='error' />
    return(
        <>
            <Stack>
                <Skeleton height='20px' />
                <Skeleton height='20px' />
                <Skeleton height='20px' />
            </Stack>

            <Skeleton>
                <div>contents wrapped</div>
                <div>won't be visible</div>
            </Skeleton>

            {/* <Box>
                <Skeleton isLoaded={!loading}>{data}
                    <Heading>{data.title}</Heading>
                </Skeleton>
            </Box> */}
            <Box padding='6' boxShadow='lg' bg='white'>
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' />
            </Box>

            <Skeleton startColor='pink.500' endColor='orange.500' height='20px' />

            <Skeleton isLoaded>
                <span>Chakra ui is cool</span>
            </Skeleton>
        </>
    )
}