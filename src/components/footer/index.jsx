import { Box, Button, Icon } from "@chakra-ui/react"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

import { MAX_WIDTH } from "../../../config"

const socialAccounts = [
  { icon: FaGithub, path: "https://github.com/" },
  { icon: FaLinkedin, path: "https://www.linkedin.com/" },
  { icon: FaInstagram, path: "https://www.instagram.com/" },
]

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
      >
        {socialAccounts.map((item, index) => (
          <Button mx="2" key={index}>
            <a href={item.path} target="_blank" rel="noopener noreferrer">
              <Icon as={item.icon} w="6" h="6" />
            </a>
          </Button>
        ))}
      </Box>
    </Box>
  </>
)

export default Footer
