import { Box, Button, Icon, Link as ChakraLink, Text } from "@chakra-ui/react"
import { FaGithub, FaLinkedin, FaInstagram, FaCode } from "react-icons/fa"

import { MAX_WIDTH } from "../../../config"

// Fell free to add your social media accounts!
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
        flexDir="column"
        textAlign="center"
        minH="4rem"
        px={[4, 6, 10, 14, 20]}
        maxW={MAX_WIDTH}
        mx="auto"
      >
        <Box py="2">
          {socialAccounts.map((item, index) => (
            <ChakraLink href={item.path} key={index} isExternal>
              <Button mx="2">
                <Icon as={item.icon} w="6" h="6" />
              </Button>
            </ChakraLink>
          ))}
        </Box>
        <Box py="2">
          <Text>
            Built with{" "}
            <span role="img" aria-label="red heart">
              ❤️
            </span>
            ,{" "}
            <ChakraLink href="https://nextjs.org/" fontWeight="600" isExternal>
              Next.js
            </ChakraLink>
            ,{" "}
            <ChakraLink
              href="https://chakra-ui.com/"
              fontWeight="600"
              isExternal
            >
              Chakra UI
            </ChakraLink>
            , Hosted in{" "}
            <ChakraLink href="http://vercel.com/" fontWeight="600" isExternal>
              Vercel
            </ChakraLink>
          </Text>
        </Box>
        <Box py="2">
          <ChakraLink
            href="https://github.com/imadatyatalah/portfolio-boilerplate-nextjs"
            isExternal
          >
            <Button>
              <Icon as={FaCode} w="6" h="6" />
            </Button>
          </ChakraLink>
        </Box>
      </Box>
    </Box>
  </>
)

export default Footer
