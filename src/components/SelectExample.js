import { Select,Stack } from '@chakra-ui/react'
import { MdArrowDropDown } from 'react-icons/md'
export default function SelectExample(){
    return(
        <>
            <Select placeholder='Select option'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
            </Select>

            <Stack spacing={3}>
                <Select placeholder='extra small size' size='xs' />
                <Select placeholder='small size' size='sm' />
                <Select placeholder='medium size' size='md' />
                <Select placeholder='large size' size='lg' />
            </Stack>

            <Stack spacing={3}>
                <Select variant='outline' placeholder='Outline' />
                <Select variant='filled' placeholder='Filled' />
                <Select variant='flushed' placeholder='Flushed' />
                <Select variant='unstyled' placeholder='Unstyled' />
            </Stack>

            <Select icon={<MdArrowDropDown />} placeholder='Woohoo! A new icon' />

            <Select bg='tomato' borderColor='tomato' color='white' placeholder='Woohoo! A new background color!'/>
        </>
    )

}