import { Link as ChakraLink } from "@chakra-ui/react"
import NextLink from "next/link"

const CustomLink = (props) => {
  const href = props.href
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"))

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <ChakraLink {...props} />
      </NextLink>
    )
  }

  return <ChakraLink isExternal {...props} />
}

export default CustomLink
