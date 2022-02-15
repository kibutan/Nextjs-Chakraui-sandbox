import {NumberInput,NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper,Stack,
        Flex,Slider, SliderTrack, SliderThumb, SliderFilledTrack,HStack,Button,Input,useNumberInput } from '@chakra-ui/react'
import React from 'react'

export default function NumberInputExample(){
    const format = (val) => `$` + val
    const parse = (val) => val.replace(/^\$/, '')
  
    const [value, setValue] = React.useState('1.53')

    const [value2, setValue2] = React.useState(0)
    const handleChange = (value2) => setValue2(value2)

    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = 
    useNumberInput({ step: 0.01, defaultValue: 1.53, min: 1, max: 6, precision: 2,})

    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps({ isReadOnly: true })
    return (
    <>
        <NumberInput>
            <NumberInputField />
            <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
            </NumberInputStepper>
        </NumberInput>

        <NumberInput defaultValue={15} min={10} max={20}>
            <NumberInputField />
            <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
            </NumberInputStepper>
        </NumberInput>

        <NumberInput step={5} defaultValue={15} min={10} max={30}>
            <NumberInputField />
            <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
            </NumberInputStepper>
        </NumberInput>

        <NumberInput defaultValue={15} precision={2} step={0.2}>
            <NumberInputField />
            <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
            </NumberInputStepper>
        </NumberInput>

        <NumberInput defaultValue={15} max={30} clampValueOnBlur={false}>
            <NumberInputField />
            <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
            </NumberInputStepper>
        </NumberInput>
        
        <NumberInput onChange={(valueString) => setValue(parse(valueString))} value={format(value)} max={50} >
            <NumberInputField />
            <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
            </NumberInputStepper>
        </NumberInput>
        
        <Stack shouldWrapChildren direction='row'>
            <NumberInput size='xs' maxW={16} defaultValue={15} min={10}>
                <NumberInputField />
                <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>

            <NumberInput size='sm' maxW={20} defaultValue={15} min={10}>
                <NumberInputField />
                <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>

            <NumberInput size='md' maxW={24} defaultValue={15} min={10}>
                <NumberInputField />
                <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>

            <NumberInput size='lg' maxW={32} defaultValue={15} min={10}>
                <NumberInputField />
                <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
        </Stack>

        <NumberInput size='sm' defaultValue={15} min={10}>
            <NumberInputField focusBorderColor='red.200' />
            <NumberInputStepper>
                <NumberIncrementStepper bg='green.200' _active={{ bg: 'green.300' }} children='+' />
                <NumberDecrementStepper bg='pink.200' _active={{ bg: 'pink.300' }} children='-' />
            </NumberInputStepper>
        </NumberInput>

        <Flex>
            <NumberInput maxW='100px' mr='2rem' value={value2} onChange={handleChange}>
                <NumberInputField />
                <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            
            <Slider flex='1' focusThumbOnChange={false} value={value2} onChange={handleChange}>
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb fontSize='sm' boxSize='32px' children={value2} />
            </Slider>
        </Flex>

        <HStack maxW='320px'>
            <Button {...inc}>+</Button>
            <Input {...input} />
            <Button {...dec}>-</Button>
        </HStack>

        <NumberInput allowMouseWheel>
        <NumberInputField />
        <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
        </NumberInputStepper>
        </NumberInput>

    </>
    )
}