import { chakra } from "@chakra-ui/react"
import NextLink from "next/link"

const Links = ({ onClick }) => (
  <>
    <chakra.li
      listStyleType="none"
      px={{ lg: "8" }}
      py={{ base: "3", lg: "0" }}
    >
      <NextLink href="/">
        <a onClick={onClick}>Home</a>
      </NextLink>
    </chakra.li>

    <chakra.li
      listStyleType="none"
      px={{ lg: "8" }}
      py={{ base: "3", lg: "0" }}
    >
      <NextLink href="/about">
        <a onClick={onClick}>About</a>
      </NextLink>
    </chakra.li>

    <chakra.li
      listStyleType="none"
      px={{ lg: "8" }}
      py={{ base: "3", lg: "0" }}
    >
      <NextLink href="/blog">
        <a onClick={onClick}>Blog</a>
      </NextLink>
    </chakra.li>

    <chakra.li
      listStyleType="none"
      px={{ lg: "8" }}
      py={{ base: "3", lg: "0" }}
    >
      <NextLink href="/contact">
        <a onClick={onClick}>Contact</a>
      </NextLink>
    </chakra.li>
  </>
)

export default Links
