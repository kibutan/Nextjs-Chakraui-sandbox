import { IconButton } from '@chakra-ui/react'
import { SearchIcon,PhoneIcon,EmailIcon } from '@chakra-ui/icons'
import { MdPhone } from 'react-icons/md'
export default function IconButtonExample(){
    return(
    <>
        <IconButton aria-label='Search database' icon={<SearchIcon />} />
        <IconButton colorScheme='blue' aria-label='Search database' icon={<SearchIcon />}/>
        <IconButton colorScheme='teal' aria-label='Call Segun' size='lg' icon={<PhoneIcon />}/>
        <IconButton variant='outline' colorScheme='teal' aria-label='Send email' icon={<EmailIcon />}/>
        <IconButton variant='outline' colorScheme='teal' aria-label='Call Sage' fontSize='20px' icon={<MdPhone />}/>
    </>
    )
}