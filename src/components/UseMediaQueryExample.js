import { useMediaQuery,Text } from '@chakra-ui/react'
export default function UseMediaQueryExample(){
    function Example() {
        const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')
      
        return (
            <Text>
                {isLargerThan1280 ? 'larger than 1280px' : 'smaller than 1280px'}
            </Text>
        )
    }

    function Example2() {
        const [isLargerThanHD, isDisplayingInBrowser] = useMediaQuery([
            '(min-width: 1920px)',
            '(display-mode: browser)',
        ])
      
        function determineText() {
            if (isLargerThanHD) {
                return `high resolution you got there ${
                    isDisplayingInBrowser ? 'in your browser' : 'on your screen'
                }`
            }
      
          return isDisplayingInBrowser
            ? 'rendering in a browser'
            : 'rendering on something else, e.g. PWA'
        }
      
        return <Text>{determineText()}</Text>
    }
    return(
        <>
            <Example />
            <Example2 />

        </>
    )
}