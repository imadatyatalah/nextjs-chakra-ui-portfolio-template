import { Box } from "@chakra-ui/react"

import Header from "./header"

const Article = ({ children, ...props }) => (
  <>
    <Box as="section" px={{ lg: "10", xl: "20" }} py="4" fontSize="14px">
      <Header {...props} />
      <Box as="article">{children}</Box>
    </Box>
  </>
)

export default Article
