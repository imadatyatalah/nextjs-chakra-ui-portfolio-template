import { Box } from "@chakra-ui/react"

import { MAX_WIDTH } from "../../../config"
import Header from "./header"

const Layout = ({ children }) => (
  <>
    <Header />
    <Box
      as="main"
      px={[4, 6, 10, 14, 20]}
      maxW={MAX_WIDTH}
      mx="auto"
      minH="100vh"
      fontSize="18px"
    >
      {children}
    </Box>
  </>
)

export default Layout
