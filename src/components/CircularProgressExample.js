import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { useEffect,  useState } from 'react'
export default function CircularProgressExample(){
    const [value, setValue] = useState(0);
    useEffect (() =>{
        const interval = setInterval(()=>{
            setValue(value => (value+1)%101);

        },50)
    },[]);
    
    return(
        <>
            <CircularProgress value={(value)%101} />
            <CircularProgress value={(value)} size='120px' />
            <CircularProgress value={(value)} size='100px' thickness='4px' />
            <CircularProgress value={(value)} color='orange.400' thickness='12px' />
            <CircularProgress value={(value)} color='green.400'>
                <CircularProgressLabel>{(value/5)%101}%</CircularProgressLabel>
            </CircularProgress>
            <CircularProgress isIndeterminate color='green.300' />

        </>
    )
}