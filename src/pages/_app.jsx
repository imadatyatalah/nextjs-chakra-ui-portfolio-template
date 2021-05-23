import { ChakraProvider } from "@chakra-ui/react"
import { DefaultSeo } from "next-seo"
import { MDXProvider } from "@mdx-js/react"

import theme from "@/theme/index"
import Layout from "@/layouts/global"
import MDXComponents from "@/components/MDXComponents"
import SEO from "next-seo.config"

import "@fontsource/poppins/latin-400.css"
import "@fontsource/poppins/latin-500.css"
import "@fontsource/poppins/latin-600.css"
import "@fontsource/poppins/latin-700.css"
import "@/styles/index.css"

const MyApp = ({ Component, pageProps }) => (
  <>
    <DefaultSeo {...SEO} />

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
