import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from "next/app"
import { QueryClient, QueryClientProvider } from "react-query"
import { SidebarDrawerProvider } from "../contexts/SidebarDrawerContext"
import { makeServer } from "../services/mirage"
import { theme } from "../styles/theme"

if(process.env.NODE_ENV == 'development'){
  makeServer()
}

const queryClient = new QueryClient()

function MyApp({ Component, pageProps } : AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <SidebarDrawerProvider>
        <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        </QueryClientProvider>
      </SidebarDrawerProvider>
    </ChakraProvider>
  )
}

export default MyApp

