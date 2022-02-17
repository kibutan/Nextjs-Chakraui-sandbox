import { useConst } from '@chakra-ui/react'

export default function UseConstExample(){
    function Example() {
        const mountTime = useConst(() => new Date().toTimeString())
        const obj = useConst({ a: Math.random() })
        return (
            <>
                <p>Mount time: {mountTime}</p>
                <p>Value from constant object: {obj.a}</p>
            </>
            )
        }
    return(
        <>
        <Example />
        </>
    )
}