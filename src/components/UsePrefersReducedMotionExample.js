import { Image, keyframes, usePrefersReducedMotion } from '@chakra-ui/react'
import logo from '../image/logo.png'

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

export default function UsePrefersReducedMotionExample() {
  const prefersReducedMotion = usePrefersReducedMotion()

  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 20s linear`

  return <Image animation={animation} src={logo}  alt="hogehoge"/>
}