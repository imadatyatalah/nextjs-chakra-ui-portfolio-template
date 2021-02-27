import { ChakraProvider } from "@chakra-ui/react"
import { DefaultSeo } from "next-seo"

import theme from "../theme"
import Layout from "../layouts/global"
import SEO from "../../next-seo.config"

import "@fontsource/poppins/400.css"
import "@fontsource/poppins/500.css"
import "@fontsource/poppins/600.css"
import "@fontsource/poppins/700.css"
import "../styles/index.css"

const MyApp = ({ Component, pageProps }) => (
  <>
    <ChakraProvider theme={theme}>
      <DefaultSeo {...SEO} />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  </>
)

export default MyApp
