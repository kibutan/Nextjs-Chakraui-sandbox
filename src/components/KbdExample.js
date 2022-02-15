import { Kbd } from '@chakra-ui/react'
export default function KbdExample(){
    return(
        <>
            <span>
                <Kbd>shift</Kbd> + <Kbd>H</Kbd>
            </span>

            <span>
                <Kbd>shift</Kbd> + <Kbd>H</Kbd>
            </span>

            <span>
                <Kbd>shift</Kbd> then <Kbd>H</Kbd>
            </span>

            <span>
                <Kbd>alt</Kbd> or <Kbd>option</Kbd>
            </span>
        </>
    )
}