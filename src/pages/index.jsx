import { Box, Button, Heading, Text } from "@chakra-ui/react"
import NextImage from "next/image"

import { data } from "../../config"

const Home = () => {
  const isOdd = (num) => num % 2

  return (
    <>
      <Box
        as="section"
        d="flex"
        alignItems="center"
        flexDir="column"
        textAlign="center"
        py="4"
      >
        <NextImage src="/bighead.svg" width="300" height="300" alt="big head" />
        <Box>
          <Heading as="h1" fontSize="2xl" fontWeight="500" py="2">
            Hi, I'm Imad{" "}
            <span role="img" aria-label="hand">
              👋🏻
            </span>
          </Heading>
          <Heading fontSize="3xl" fontWeight="700">
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
            based in MA, I specialize in UI/UX design, Responsive web design,
            And accessibility.
          </Text>
          <Button colorScheme="teal" variant="ghost" size="lg">
            Get in touch
          </Button>
        </Box>
      </Box>

      <Box
        as="section"
        d="flex"
        alignItems="center"
        flexDir="column"
        textAlign={{ base: "center", lg: "left" }}
        py="4"
      >
        {data.map((item, index) => (
          <Box
            d={{ lg: "flex" }}
            justifyContent={{ lg: "center" }}
            alignItems={{ lg: "center" }}
            flexDir={{ lg: isOdd(index) == 1 && "row-reverse" }}
            key={index}
          >
            <Box
              w={{ base: "80%", lg: "35%" }}
              mx={{ base: "auto", lg: "0" }}
              pl={{ lg: isOdd(index) == 1 && "10" }}
              pr={{ lg: isOdd(index) == 0 && "10" }}
            >
              <NextImage
                src={item.image}
                width="500"
                height="500"
                alt={item.title}
              />
            </Box>

            <Box w={{ lg: "50%" }}>
              <Heading as="h1">{item.title}</Heading>
              <Text py="4">{item.description}</Text>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  )
}

export default Home
