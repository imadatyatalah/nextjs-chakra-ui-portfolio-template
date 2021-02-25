import { Box, chakra, Heading } from "@chakra-ui/react"

import styles from "./styles/headings.module.css"

const Headings = (props) => {
  const { children, id } = props

  return (
    <>
      <Heading className={styles.heading} {...props}>
        <Box className={styles.wrapper}>
          <span className={styles.visuallyHidden}>
            Read the {children} section.
          </span>
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
