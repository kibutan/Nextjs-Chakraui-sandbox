import { Progress,Stack } from '@chakra-ui/react'
import { useState,useEffect } from 'react';
export default function ProgressExample(){
    const [value, setValue] = useState(0);
    useEffect (() =>{
        const interval = setInterval(()=>{
            setValue(value => (value+1)%101);

        },50)
    },[]);
    
    return(
        <>
            <Progress value={value} />
            <Progress hasStripe value={value} />
            <Stack spacing={5}>
                <Progress colorScheme='green' size='sm' value={value} />
                <Progress colorScheme='green' size='md' value={value} />
                <Progress colorScheme='green' size='lg' value={value} />
                <Progress colorScheme='green' height='32px' value={value} />
            </Stack>
            <Progress value={20} size='xs' colorScheme='pink' />
            <Progress size='xs' isIndeterminate />
        </>
    )
}