import { Box } from "@chakra-ui/react"

import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Box>{children}</Box>
    </>
  )
}

export default Layout
