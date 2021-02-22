import { ChakraProvider } from "@chakra-ui/react"
import { MDXProvider } from "@mdx-js/react"

import theme from "../components/theme"
import Layout from "../components/layouts"
import MDXComponents from "../components/MDXComponents"

import "@fontsource/poppins/100.css"
import "@fontsource/poppins/200.css"
import "@fontsource/poppins/300.css"
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/500.css"
import "@fontsource/poppins/600.css"
import "@fontsource/poppins/700.css"
import "@fontsource/poppins/800.css"
import "@fontsource/poppins/900.css"

const MyApp = ({ Component, pageProps }) => (
  <>
    <ChakraProvider theme={theme}>
      <Layout>
        <MDXProvider components={MDXComponents}>
          <Component {...pageProps} />
        </MDXProvider>
      </Layout>
    </ChakraProvider>
  </>
)

export default MyApp
