import { Avatar, AvatarBadge, AvatarGroup, Wrap, WrapItem,Stack } from '@chakra-ui/react'
import {AiOutlineUser} from "react-icons/ai"
export default function AvaterExample(){
    return(
        <>
            <Wrap>
                <WrapItem>
                    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                </WrapItem>
                <WrapItem>
                    <Avatar name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole' />
                </WrapItem>
                <WrapItem>
                    <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                </WrapItem>
                <WrapItem>
                    <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                </WrapItem>
                <WrapItem>
                    <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                </WrapItem>
                <WrapItem>
                    <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                </WrapItem>
                <WrapItem>
                    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                </WrapItem>
            </Wrap>

            <Wrap>
                <WrapItem>
                    <Avatar size='2xs' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                </WrapItem>
                <WrapItem>
                    <Avatar
                    size='xs'
                    name='Kola Tioluwani'
                    src='https://bit.ly/tioluwani-kolawole'
                    />{' '}
                </WrapItem>
                <WrapItem>
                    <Avatar size='sm' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />{' '}
                </WrapItem>
                <WrapItem>
                    <Avatar size='md' name='Ryan Florence' src='https://bit.ly/ryan-florence' />{' '}
                </WrapItem>
                <WrapItem>
                    <Avatar
                    size='lg'
                    name='Prosper Otemuyiwa'
                    src='https://bit.ly/prosper-baba'
                    />{' '}
                </WrapItem>
                <WrapItem>
                    <Avatar size='xl' name='Christian Nwamba' src='https://bit.ly/code-beast' />{' '}
                </WrapItem>
                <WrapItem>
                    <Avatar size='2xl' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />{' '}
                </WrapItem>
            </Wrap>

            <Stack direction='row'>
                <Avatar name='Oshigaki Kisame' src='https://bit.ly/broken-link' />
                <Avatar name='Sasuke Uchiha' src='https://bit.ly/broken-link' />
                <Avatar src='https://bit.ly/broken-link' />
            </Stack>

            <AvatarGroup spacing='1rem'>
                <Avatar bg='red.500' icon={<AiOutlineUser fontSize='1.5rem' />} />
                <Avatar bg='teal.500' />
            </AvatarGroup>

            <Stack direction='row' spacing={4}>
                <Avatar>
                    <AvatarBadge boxSize='1.25em' bg='green.500' />
                </Avatar>

                {/* You can also change the borderColor and bg of the badge */}
                <Avatar>
                    <AvatarBadge borderColor='papayawhip' bg='tomato' boxSize='1.25em' />
                </Avatar>
            </Stack>

            <AvatarGroup size='md' max={2}>
                <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
            </AvatarGroup>
        </>
    )
}