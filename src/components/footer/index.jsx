import { Box } from "@chakra-ui/react"

import { MAX_WIDTH } from "../../../config"

const Footer = () => (
  <>
    <Box as="footer" fontSize="18px">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        px={[4, 6, 10, 14, 20]}
        maxW={MAX_WIDTH}
        mx="auto"
      ></Box>
    </Box>
  </>
)

export default Footer
