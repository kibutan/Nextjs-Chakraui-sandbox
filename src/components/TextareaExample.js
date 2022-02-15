import { Textarea, Text, RadioGroup, Stack, Radio } from "@chakra-ui/react";
import React from "react";
export default function TextareaExample(){
    let [value, setValue] = React.useState('')
    const [resize, setResize] = React.useState('horizontal')
    let handleInputChange = (e) => {
      let inputValue = e.target.value
      setValue(inputValue)
    }
    return(
        <>
            <Textarea placeholder='Here is a sample placeholder' />

            <Text mb='8px'>Value: {value}</Text>
            <Textarea value={value} onChange={handleInputChange} placeholder='Here is a sample placeholder' size='sm' />
            <RadioGroup defaultValue={resize} onChange={setResize} mb={6}>
                <Stack direction='row' spacing={5}>
                <Radio value='horizontal'>Horizontal</Radio>
                <Radio value='vertical'>Vertical</Radio>
                <Radio value='none'>None</Radio>
                </Stack>
            </RadioGroup>
            <Textarea placeholder='Here is a sample placeholder' size='sm' resize={resize} />
            <Textarea isDisabled placeholder='Here is a sample placeholder' />
            <Textarea isInvalid placeholder='Here is a sample placeholder' />
        </>
    )
}