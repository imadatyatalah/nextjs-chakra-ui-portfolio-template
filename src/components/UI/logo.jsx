import { chakra } from "@chakra-ui/react"
import NextLink from "next/link"

const Logo = () => (
  <>
    <NextLink href="/">
      <chakra.a href="/" fontSize="2rem" fontWeight="700">
        LOGO
      </chakra.a>
    </NextLink>
  </>
)

export default Logo
