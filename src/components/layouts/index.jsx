import { Box } from "@chakra-ui/react"

import Header from "./header"

const Layout = ({ children }) => (
  <>
    <Header />
    <Box as="main" minH="100vh">
      {children}
    </Box>
  </>
)

export default Layout
