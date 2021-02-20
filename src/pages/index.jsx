import { Box, Button, Heading, Text } from "@chakra-ui/react"
import NextImage from "next/image"

import { MAX_WIDTH } from "../../config"

const Home = () => (
  <>
    <Box
      as="section"
      d="flex"
      alignItems="center"
      flexDir="column"
      textAlign="center"
      minH="100vh"
      py="4"
      px={[4, 6, 10, 14, 20]}
      maxW={MAX_WIDTH}
      mx="auto"
    >
      <NextImage src="/bighead.svg" width="300" height="300" alt="big head" />
      <Box>
        <Heading as="h1" fontSize="2xl" fontWeight="500" py="2">
          Hi, I'm Imad{" "}
          <span role="img" aria-label="hand">
            👋🏻
          </span>
        </Heading>
        <Heading as="h3" fontSize="3xl" fontWeight="700">
          <Text as="span" color="teal.300">
            Building
          </Text>{" "}
          digital products, Brands, And experience.
        </Heading>
        <Text py="4">
          A{" "}
          <Text as="span" fontWeight="600">
            web designer
          </Text>{" "}
          and{" "}
          <Text as="span" fontWeight="600">
            front-end web developer
          </Text>{" "}
          based in MA, I specialize in UI/UX design, Responsive web design, And
          accessibility.
        </Text>
        <Button colorScheme="teal" variant="ghost" size="lg">
          Get in touch
        </Button>
      </Box>
    </Box>
  </>
)

export default Home
