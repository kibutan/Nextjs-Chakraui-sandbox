// https://zenn.dev/a_da_chi/articles/181ea4ccc39580#:~:text=%E3%81%93%E3%82%8C%E3%81%A7yarn,%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82%EF%BC%89
import { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}