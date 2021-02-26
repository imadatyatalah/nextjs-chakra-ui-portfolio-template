import { ChakraProvider } from "@chakra-ui/react"
import { MDXProvider } from "@mdx-js/react"
import { DefaultSeo } from "next-seo"

import theme from "../components/theme"
import Layout from "../layouts/global"
import MDXComponents from "../components/MDXComponents"
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
        <MDXProvider components={MDXComponents}>
          <Component {...pageProps} />
        </MDXProvider>
      </Layout>
    </ChakraProvider>
  </>
)

export default MyApp
