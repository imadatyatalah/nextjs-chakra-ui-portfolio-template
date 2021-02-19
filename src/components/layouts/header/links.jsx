import { Box, chakra } from "@chakra-ui/react"
import NextLink from "next/link"

import { links } from "../../../../config"

const Links = ({ onClick }) => {
  return (
    <>
      {links.map((link) => (
        <Box
          as="li"
          listStyleType="none"
          px={{ lg: "8" }}
          py={{ base: "3", lg: "0" }}
          key={link.title}
        >
          <NextLink href={link.path}>
            <chakra.a href={link.path} onClick={onClick}>
              {link.title}
            </chakra.a>
          </NextLink>
        </Box>
      ))}
    </>
  )
}

export default Links
