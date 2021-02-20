import { Box } from "@chakra-ui/react"

import Header from "./header"

const Layout = ({ children }) => (
  <>
    <Header />
    <Box as="main">{children}</Box>
  </>
)

export default Layout
