import { useTheme } from '@chakra-ui/react'
export default function UseThemeExample(){
    function Example() {
        const theme = useTheme()
      
        return <div>{/* Do something with the theme */}</div>
    }
    return(
        <>
            <example />
        </>
    )
}