import { Box, chakra, Heading, VisuallyHidden } from "@chakra-ui/react"

import styles from "./styles/headings.module.css"

const Headings = (props) => {
  const { children, id } = props

  return (
    <>
      <Heading className={styles.heading} {...props}>
        <Box className={styles.wrapper}>
          <VisuallyHidden>Read the {children} section.</VisuallyHidden>
          {children}
          {id && (
            <chakra.a
              aria-label="anchor"
              className={styles.hashtag}
              href={`#${id}`}
            >
              #
            </chakra.a>
          )}
        </Box>
      </Heading>
    </>
  )
}

export default Headings
