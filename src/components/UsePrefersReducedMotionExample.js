import { Image, keyframes, usePrefersReducedMotion,props } from '@chakra-ui/react'
import logo from '../image/Image1.jpg'

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

export default function UsePrefersReducedMotionExample() {
  const prefersReducedMotion = usePrefersReducedMotion()

  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 20s linear`

  return <Image animation={animation} src={logo} {...props} />
}