import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { HStack,Icon,createIcon } from '@chakra-ui/react'
import { MdSettings,MdReceipt,MdGroupWork } from 'react-icons/md'
export default function IconExample(){
    const CircleIcon = (props) => (
        <Icon viewBox='0 0 200 200' {...props}>
          <path
            fill='currentColor'
            d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
          />
        </Icon>
    )

    const UpDownIcon = createIcon({
        displayName: 'UpDownIcon',
        viewBox: '0 0 200 200',
        d: 'M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0',
    })
    const UpDownIcon2 = createIcon({
        displayName: 'UpDownIcon',
        viewBox: '0 0 200 200',
        // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
        path: (
          <path
            fill='currentColor'
            d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
          />
        ),
    })
    return (
        <>
            <PhoneIcon />
            <AddIcon w={6} h={6} />
            <WarningIcon w={8} h={8} color="red.500" />
            <Icon as={MdSettings} />
            <HStack>
                {/* The default icon size is 1em (16px) */}
                <Icon as={MdSettings} />

                {/* Use the `boxSize` prop to change the icon size */}
                <Icon as={MdReceipt} w={6} h={6} />

                {/* Use the `color` prop to change the icon color */}
                <Icon as={MdGroupWork} w={8} h={8} color='red.500' />
            </HStack>

            <Icon viewBox='0 0 200 200' color='red.500'>
                <path fill='currentColor' d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0' />
            </Icon>
            
            <CircleIcon />
            <HStack>
                {/* The default icon size is 1em (16px) */}
                <CircleIcon />

                {/* Use the `boxSize` prop to change the icon size */}
                <CircleIcon boxSize={6} />

                {/* Use the `color` prop to change the icon color */}
                <CircleIcon boxSize={8} color='red.500' />
            </HStack>

            <UpDownIcon />
            <UpDownIcon2 />

            <Icon />
        </>
    )
}