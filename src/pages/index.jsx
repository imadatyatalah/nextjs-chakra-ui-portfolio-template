import {
  Avatar,
  Box,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
  AspectRatio,
  Center,
  SimpleGrid,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { FaReact } from "react-icons/fa";
FaReact;

// import React from 'react'
// import ReactPlayer from 'react-player'
// import {video} from "../assets/videos/reduce.mp4"
import NextImage from "next/image";

import { seo, data } from "config";

const Home = () => {
  const color = useColorModeValue("telegram.500", "telegram.400");

  const isOdd = (num) => num % 2;

  const title = "Home";
  const description = seo.description;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={seo.canonical}
        openGraph={{
          title,
          description,
          images: [
            {
              url: `${seo.canonical}bighead.svg`,
              width: "350px",
              height: "350px",
              alt: "avatar bigheads",
            },
          ],
        }}
      />

      <SimpleGrid
        py={["0", "2"]}
        minChildWidth="320px"
        columns={2}
        spacing={10}
      >
        <Box
          as="section"
          d="flex"
          alignItems="center"
          flexDir="column"
          textAlign="center"
          py={["0", "2"]}
          maxW="560px"
        >
          <Avatar
            border="4px solid"
            borderColor="pink.500"
            mt="4"
            size={["lg", "2xl"]}
            // src="http://github.com/helton-quintans.png"
            src="/avatar01.png"
          />

          <Box>
            <Heading as="h1" fontSize="2xl" fontWeight="500" py="2">
              Hi, I'm{" "}
              <Text
                as="span"
                borderBottom="4px solid"
                borderColor="telegram.500"
                color={color}
              >
                Helton Quintãns
              </Text>{" "}
              <span role="img" aria-label="hand">
                👋🏻
              </span>
            </Heading>
            <Heading fontSize={["3xl", "4xl"]} fontWeight="700">
              <Text as="span">
                I work with{" "}
                <Text as="span" color={color}>
                  React
                </Text>{" "}
                Ecosystem.
              </Text>{" "}
              <Center color={color}>
                <FaReact fontSize={32} />
              </Center>
            </Heading>
            <Text py="4">
              <Text as="span" fontWeight="600">
                Front-end web developer
              </Text>{" "}
              from Brazil 🇧🇷, i specialize in UI/UX design, responsive web
              design, and accessibility.
            </Text>
            <Button
              colorScheme="telegram"
              variant="outline"
              size="md"
              fontSize="20px"
            >
              Github
            </Button>
          </Box>
        </Box>

        <Box align="center" py={["2", "12"]} justifyItems="center">
          <AspectRatio
            justifyContent="center"
            maxW="490px"
            maxH="450px"
            // ratio={1}
          >
            <video
              id="video"
              title="reduce"
              muted
              poster="/images/thumb.png"
              autoPlay
              controls
              allowFullScreen
              src="../assets/videos/reduce.mp4 "
            />
          </AspectRatio>
        </Box>
      </SimpleGrid>

      <Stack as="section" alignItems="center" flexDir="column" p="4">
        <Text
          fontSize="26px"
          borderBottom="4px solid"
          borderColor="telegram.500"
        >
          In love with Javascript{" "}
        </Text>{" "}
        <span>💛</span>
        <Text textAlign="center">
          I make videos to teach people how to rebuild and redefine fundamental
          programming concepts.
        </Text>
      </Stack>

      {/* <Box
        as="section"
        d="flex"
        alignItems="center"
        flexDir="column"
        textAlign={{ base: "center", lg: "left" }}
        py="4"
      >
        {data.map((item, index) => (
          <>
            <Box w={{ lg: "50%" }}>
              <Heading as="h1">{item.title}</Heading>
              <Text py="4">{item.description}</Text>
            </Box>

            <Stack align="center">
              <Box key={index}></Box>
            </Stack>

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
                  placeholder="blur"
                  blurDataURL="L8LE.{~60000_3V@ITx^00t:V?-P"
                />
              </Box>
            </Box>
          </>
        ))}
      </Box> */}
    </>
  );
};

export default Home;
