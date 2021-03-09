import { Box } from "@chakra-ui/react"
import { MDXProvider } from "@mdx-js/react"

import MDXComponents from "../../components/MDXComponents"
import Header from "./header"

const Article = ({ children, ...props }) => (
  <>
    <MDXProvider components={MDXComponents}>
      <Box
        as="section"
        px={{ md: "10", lg: "20", xl: "40" }}
        py="4"
        fontSize="16px"
      >
        <Header {...props} />
        <article>{children}</article>
      </Box>
    </MDXProvider>
  </>
)

export default Article
