import NextLink from "next/link"

const CustomLink = (props) => {
  const href = props.href
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"))

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <a {...props} />
      </NextLink>
    )
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

export default CustomLink
