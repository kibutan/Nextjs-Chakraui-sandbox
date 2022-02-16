import { Link,Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import NextLink from "next/link"
export default function LinkExample(){
    return(
        <>
            <Link>Chakra UI</Link>

            <Link href='https://chakra-ui.com' isExternal>
                Chakra Design system <ExternalLinkIcon mx='2px' />
            </Link>

            <Text>
                Did you know that{' '}
                <Link color='teal.500' href='#'>
                    links can live inline with text
                </Link>
            </Text>
                <NextLink href='/home' passHref>
                <Link>Home</Link>
            </NextLink>
        </>
    )
}