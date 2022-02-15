import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, SliderMark, Box, Tooltip} from '@chakra-ui/react'
import { MdGraphicEq } from 'react-icons/md'
import React from 'react'
import { useState } from 'react'
export default function SliderExample(){
    const [sliderValue, setSliderValue] = useState(50)
    const [sliderValue2, setSliderValue2] = useState(5)
    const [showTooltip, setShowTooltip] = React.useState(false)
    let value = 10
    return(
    <>
        <Slider aria-label='slider-ex-1' defaultValue={30}>
            <SliderTrack>
                <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
        </Slider>

        <Slider aria-label='slider-ex-2' colorScheme='pink' defaultValue={30}>
            <SliderTrack>
                <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
        </Slider>

        <Slider aria-label='slider-ex-3' defaultValue={30} orientation='vertical' minH='32' >
            <SliderTrack>
                <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
        </Slider>

        <Slider aria-label='slider-ex-4' defaultValue={30}>
            <SliderTrack bg='red.100'>
                <SliderFilledTrack bg='tomato' />
            </SliderTrack>
            <SliderThumb boxSize={6}>
                <Box color='tomato' as={MdGraphicEq} />
            </SliderThumb>
        </Slider>

        <Slider defaultValue={60} min={0} max={300} step={30}>
            <SliderTrack bg='red.100'>
                <Box position='relative' right={10} />
                <SliderFilledTrack bg='tomato' />
            </SliderTrack>
            <SliderThumb boxSize={6} />
        </Slider>

        <Slider aria-label='slider-ex-6' onChange={(val) => setSliderValue(val)}>
            <SliderMark value={25} mt='1' ml='-2.5' fontSize='sm'>25%</SliderMark>
            <SliderMark value={50} mt='1' ml='-2.5' fontSize='sm'>50%</SliderMark>
            <SliderMark value={75} mt='1' ml='-2.5' fontSize='sm'>75%</SliderMark>
            <SliderMark value={sliderValue} textAlign='center' bg='blue.500' color='white' mt='-10' ml='-5' w='12' >{sliderValue}% </SliderMark>
            <SliderTrack>
                <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
        </Slider>

        <Slider id='slider' defaultValue={5} min={0} max={100} colorScheme='teal' onChange={(v) => setSliderValue2(v)} onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
            <SliderMark value={25} mt='1' ml='-2.5' fontSize='sm'>25%</SliderMark>
            <SliderMark value={50} mt='1' ml='-2.5' fontSize='sm'>50%</SliderMark>
            <SliderMark value={75} mt='1' ml='-2.5' fontSize='sm'>75%</SliderMark>
            <SliderTrack>
                <SliderFilledTrack />
            </SliderTrack>
            <Tooltip hasArrow bg='teal.500' color='white' placement='top' isOpen={showTooltip} label={`${sliderValue2}%`}>
                <SliderThumb />
            </Tooltip>
        </Slider>

        <Slider aria-label='slider-ex-5' onChangeEnd={(val) => console.log(val)}>
            <SliderTrack>
                <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
        </Slider>

        <Slider aria-label='slider-ex-5' value={value} focusThumbOnChange={false}>
            <SliderTrack>
                <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
        </Slider>
    </>
    )
}