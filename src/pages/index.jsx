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
  Grid,
  GridItem,
  StackItem,
  Tooltip,
  HStack,
  Image,
  Flex,
  Divider,
} from "@chakra-ui/react";
import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiCss3,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiPuppeteer,
  SiSass,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiChakraui,
  SiDocker,
  SiNextdotjs,
  SiLinux,
  SiReact,
  SiMongodb,
  SiGit,
  SiGithub,
  SiGitlab,
  SiNodedotjs,
} from "react-icons/si";
import { DiMysql } from "react-icons/di";

import { MotionBox, MotionAvatar, container, item } from "../styles/animation";
import { NextSeo } from "next-seo";

import NextImage from "next/image";

import { seo, data } from "config";
import { CardProject } from "@/components/cardProject";
import { TechBox } from "@/components/techBox";

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
      <MotionBox
        as="section"
        d="flex"
        alignItems="center"
        flexDir="column"
        textAlign="center"
        border="1px solid"
        borderRadius="8"
        borderColor={color}
        maxW="560px"
        h={["90vh", "86vh"]}
        p={["16", "8"]}
        m="auto"
        boxShadow="dark-lg"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <MotionAvatar
          boxShadow="dark-lg"
          border="1px solid"
          borderColor={color}
          size={["xl", "2xl"]}
          src="/avatar01.png"
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 1000,
            damping: 20,
          }}

          // variants={item}
          // src="http://github.com/helton-quintans.png"
        />

        <MotionBox variants={item}>
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
          <Heading p="2" fontSize={["3xl", "4xl"]} fontWeight="700">
            <Text as="span">
              I work with{" "}
              <Text as="span" color={color}>
                React
              </Text>{" "}
              Ecosystem.
            </Text>{" "}
            <Center color={color}>
              <SiReact fontSize={32} />
            </Center>
          </Heading>
          <Text px={["0", "4"]}>
            <Text as="span" fontSize="xl" fontWeight="600">
              Front-end web developer <br />
            </Text>{" "}
            from Brazil 🇧🇷, i specialize in UI/UX design, responsive web design,
            and accessibility.
          </Text>
          <Button
            colorScheme="telegram"
            variant="outline"
            mt={["6", "4"]}
            size="lg"
            fontSize="20px"
          >
            Github
          </Button>
        </MotionBox>
      </MotionBox>
      <Stack as="section" alignItems="center" flexDir="column" p="4">
        <Heading
          as="h1"
          mt="10"
          textAlign="center"
          borderBottom="4px solid"
          borderColor="telegram.500"
        >
          In love with Javascript <span>💛</span>
        </Heading>{" "}
        <Text textAlign="center">
          I make videos to teach people how to rebuild and redefine fundamental
          programming concepts.
        </Text>
      </Stack>
      <MotionBox
        border={["1px solid", "0px"]}
        borderRadius="8"
        borderColor={color}
        boxShadow="dark-lg"
        align="center"
        p="2"
        justifyItems="center"
        // whileHover={{ scale: 1.1 }}
        // whileTap={{ scale: 0.2 }}
      >
        <AspectRatio
          justifyContent="center"
          // maxW="920px"
          // maxH="450px"
          minH="30vh"
          maxH="78vh"
          ratio={[2, 1]}
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
      </MotionBox>

      {/* //! PROJECTS */}
      <Stack as="section" id="projects" alignItems="center" flexDir="column" p="4">
        <Heading
          as="h1"
          mt="10"
          textAlign="center"
          borderBottom="4px solid"
          borderColor="telegram.500"
        >
          Projects
        </Heading>{" "}
        <Text textAlign="center">Welcome to my projects</Text>
      </Stack>
      <SimpleGrid minChildWidth="320px" gap={2}>
        <MotionBox
          p="4"
          borderRadius="8"
          // border="1px solid"
          // borderColor={color}
        >
          <MotionBox
            d="flex"
            alignItems="center"
            flexDir="column"
            textAlign="center"
            size="md"
          >
            <Text
              as="h2"
              textAlign="center"
              color={color}
              fontWeight="semibold"
              fontSize="32px"
              borderRadius="8"
              mb="4"
            >
              Dashgo
            </Text>
            <Image src="/images/dashgo.png" />

            <MotionBox
              size="md"
              d="flex"
              alignItems="center"
              flexDir="column"
              textAlign="center"
              borderRadius="8"
              p="4"
            >
              <Text textAlign="center" noOfLines={3} px={["0", "0", "24"]}>
                DashGo is an application for dashboards in general with pages
                and pagination, login and user inclusion system made with
                Next.js, Typescript, React-query and other technologies.
              </Text>
              <Button
                colorScheme="telegram"
                my="4"
                variant="outline"
                size="md"
                fontSize="20px"
              >
                See more
              </Button>
              <Divider />
            </MotionBox>
          </MotionBox>
        </MotionBox>
      </SimpleGrid>
      <SimpleGrid minChildWidth="320px"  gap={2}>
        <MotionBox
          p="4"
          borderRadius="8"
          // border="1px solid"
          // borderColor={color}
        >
          <MotionBox
            d="flex"
            alignItems="center"
            flexDir="column"
            textAlign="center"
            size="md"
          >
            <Text
              as="h2"
              textAlign="center"
              color={color}
              fontWeight="semibold"
              fontSize="32px"
              borderRadius="8"
              mb="4"
            >
              Yan Bot
            </Text>
            <Image src="/images/yanBot.png" />

            <MotionBox
              size="md"
              d="flex"
              alignItems="center"
              flexDir="column"
              textAlign="center"
              borderRadius="8"
              p="4"
            >
              <Text noOfLines={3} textAlign="center" px={["0", "0", "24"]}>
                🧠 Yan is an artificial intelligence that uses Machine learning
                and NLP (natural language processing). 🌎 It is multilingual and
                supports 40 languages natively and 104 languages through BERT
                integration. 👨‍🚀 Born with the purpose of understanding
                customers' intentions and providing a quick and effective
                response, the more you talk to Yan, the more he learns and
                improves the user experience. 🤘 This project has the help of
                the open source community in Brazil and the world.
              </Text>
              <Button
                colorScheme="telegram"
                my="4"
                variant="outline"
                size="md"
                fontSize="20px"
              >
                See more
              </Button>
              <Divider />
            </MotionBox>
          </MotionBox>
        </MotionBox>
      </SimpleGrid>
      <SimpleGrid minChildWidth="320px"  gap={2}>
        <MotionBox
          p="4"
          borderRadius="8"
          // border="1px solid"
          // borderColor={color}
        >
          <MotionBox
            d="flex"
            alignItems="center"
            flexDir="column"
            textAlign="center"
            size="md"
          >
            <Text
              as="h2"
              textAlign="center"
              color={color}
              fontWeight="semibold"
              fontSize="32px"
              borderRadius="8"
              mb="4"
            >
              hq.news
            </Text>
            <Image src="/images/hqNews.png" />

            <MotionBox
              size="md"
              d="flex"
              alignItems="center"
              flexDir="column"
              textAlign="center"
              borderRadius="8"
              p="4"
            >
              <Text noOfLines={3} textAlign="center" px={["0", "0", "24"]}>
                The hq.news project is a blog where users can access the content
                of each post according to their subscription status through a
                Stripe payment system integration.
              </Text>
              <Button
                colorScheme="telegram"
                my="4"
                variant="outline"
                size="md"
                fontSize="20px"
              >
                See more
              </Button>
              <Divider />
            </MotionBox>
          </MotionBox>
        </MotionBox>
      </SimpleGrid>
      <SimpleGrid minChildWidth="320px"  gap={2}>
        <MotionBox
          p="4"
          borderRadius="8"
          // border="1px solid"
          // borderColor={color}
        >
          <MotionBox
            d="flex"
            alignItems="center"
            flexDir="column"
            textAlign="center"
            size="md"
          >
            <Text
              as="h2"
              textAlign="center"
              color={color}
              fontWeight="semibold"
              fontSize="32px"
              borderRadius="8"
              mb="4"
            >
              Feed
            </Text>
            <Image src="/images/feed.png" />

            <MotionBox
              size="md"
              d="flex"
              alignItems="center"
              flexDir="column"
              textAlign="center"
              borderRadius="8"
              p="4"
            >
              <Text noOfLines={3} textAlign="center" px={["0", "0", "24"]}>
                Feed is an application like a social network where you can like
                and comment on a third-party publication and was developed with
                Next.js, Javascript, and Styled-Components and other
                technologies.
              </Text>
              <Button
                colorScheme="telegram"
                my="4"
                variant="outline"
                size="md"
                fontSize="20px"
              >
                See more
              </Button>
              <Divider />
            </MotionBox>
          </MotionBox>
        </MotionBox>
      </SimpleGrid>
      <SimpleGrid minChildWidth="320px"  gap={2}>
        <MotionBox p="4" borderRadius="8">
          <MotionBox
            d="flex"
            alignItems="center"
            flexDir="column"
            textAlign="center"
            size="md"
          >
            <Text
              as="h2"
              textAlign="center"
              color={color}
              fontWeight="semibold"
              fontSize="32px"
              borderRadius="8"
              mb="4"
            >
              Watch.me
            </Text>
            <Image src="/images/watchMe.png" />

            <MotionBox
              size="md"
              d="flex"
              alignItems="center"
              flexDir="column"
              textAlign="center"
              borderRadius="8"
              p="4"
            >
              <Text noOfLines={3} textAlign="center" px={["0", "0", "24"]}>
                Application that allows the user to have greater accuracy in
                personal financial control by recording financial inputs and
                outputs. There is the possibility of adding, editing or deleting
                transactions in addition to storing and persisting data in local
                storage.
              </Text>
              <Button
                colorScheme="telegram"
                my="4"
                variant="outline"
                size="md"
                fontSize="20px"
              >
                See more
              </Button>
              <Divider />
            </MotionBox>
          </MotionBox>
        </MotionBox>
      </SimpleGrid>
      <SimpleGrid minChildWidth="320px"  gap={2}>
        <MotionBox
          p="4"
          borderRadius="8"
          // border="1px solid"
          // borderColor={color}
        >
          <MotionBox
            d="flex"
            alignItems="center"
            flexDir="column"
            textAlign="center"
            size="md"
          >
            <Text
              as="h2"
              textAlign="center"
              color={color}
              fontWeight="semibold"
              fontSize="32px"
              borderRadius="8"
              mb="4"
            >
              B7Delivery
            </Text>
            <Image src="/images/delivery.png" />

            <MotionBox
              size="md"
              d="flex"
              alignItems="center"
              flexDir="column"
              textAlign="center"
              borderRadius="8"
              p="4"
            >
              <Text noOfLines={3} textAlign="center" px={["0", "0", "24"]}>
                Multi-tenancy SaaS made with Typescript and Next.js. Delivery
                system for small and medium businesses where it is possible to
                place orders for registered restaurants.
              </Text>
              <Button
                colorScheme="telegram"
                my="4"
                variant="outline"
                size="md"
                fontSize="20px"
              >
                See more
              </Button>
              <Divider />
            </MotionBox>
          </MotionBox>
        </MotionBox>
      </SimpleGrid>
      <SimpleGrid minChildWidth="320px"  gap={2}>
        <MotionBox
          p="4"
          borderRadius="8"
          // border="1px solid"
          // borderColor={color}
        >
          <MotionBox
            d="flex"
            alignItems="center"
            flexDir="column"
            textAlign="center"
            size="md"
          >
            <Text
              as="h2"
              textAlign="center"
              color={color}
              fontWeight="semibold"
              fontSize="32px"
              borderRadius="8"
              mb="4"
            >
              Rocketshoes
            </Text>
            <Image src="/images/rocketshoes.png" />

            <MotionBox
              size="md"
              d="flex"
              alignItems="center"
              flexDir="column"
              textAlign="center"
              borderRadius="8"
              p="4"
            >
              <Text noOfLines={3} textAlign="center" px={["0", "0", "24"]}>
                This project was developed at the RocketSeat Ignite Bootcamp
                with the following technologies: ReactJS, Redux, Redux-Saga,
                React, Router, v4, Axios, Polished, React-Toastify,
                styled-components, React-Icons, react-loading-skeleton,
                react-loader-spinner, json-server and more.
              </Text>
              <Button
                colorScheme="telegram"
                my="4"
                variant="outline"
                size="md"
                fontSize="20px"
              >
                See more
              </Button>
              <Divider />
            </MotionBox>
          </MotionBox>
        </MotionBox>
      </SimpleGrid>
      <SimpleGrid minChildWidth="320px"  gap={2}>
        <MotionBox p="4" borderRadius="8">
          <MotionBox
            d="flex"
            alignItems="center"
            flexDir="column"
            textAlign="center"
            size="md"
          >
            <Text
              as="h2"
              textAlign="center"
              color={color}
              fontWeight="semibold"
              fontSize="32px"
              borderRadius="8"
              mb="4"
            >
              Control of Expenses
            </Text>
            <Image src="/images/controleDeDespesas.png" />

            <MotionBox
              size="md"
              d="flex"
              alignItems="center"
              flexDir="column"
              textAlign="center"
              borderRadius="8"
              p="4"
            >
              <Text noOfLines={3} textAlign="center" px={["0", "0", "24"]}>
                Application that allows the user to have greater accuracy in
                personal financial control by recording financial inputs and
                outputs. There is the possibility of adding, editing or deleting
                transactions in addition to storing and persisting data in local
                storage.
              </Text>
              <Button
                colorScheme="telegram"
                my="4"
                variant="outline"
                size="md"
                fontSize="20px"
              >
                See more
              </Button>
              <Divider />
            </MotionBox>
          </MotionBox>
        </MotionBox>
      </SimpleGrid>

      {/* //!TECHS */}
      <Stack alignItems="center" flexDir="column" p="4">
        <Heading
          as="h1"
          mt="10"
          borderBottom="4px solid"
          borderColor="telegram.500"
        >
          Techs
        </Heading>
        <Text textAlign="center">Main technologies I work currently</Text>
      </Stack>
      <SimpleGrid as="section" gap={6} minChildWidth="320px">
        <>
          <Box
            boxShadow="dark-lg"
            borderRadius="8"
            border="1px solid "
            borderColor={color}
            w="100%"
            h="100%"
            variant={container}
            initial="hidden"
            animate="visible"
          >
            <Stack alignItems="center" textAlign="center" p="8">
              <SiHtml5 size={80} />
              <Text fontWeight="medium" color={color} fontSize="24px">
                HTML5
              </Text>
              <Text fontSize="16px">
                Markup language for the World Wide Web and is a key Internet
                technology, originally proposed by Opera Software. It is the
                fifth version of the HTML language.
              </Text>
            </Stack>
          </Box>

          <Box
            boxShadow="dark-lg"
            borderRadius="8"
            border="1px solid "
            borderColor={color}
            w="100%"
            h="100%"
          >
            <Stack
              bgColor="transparent"
              alignItems="center"
              textAlign="center"
              p="8"
            >
              <SiCss3 size={80} />
              <Text fontWeight="medium" color={color} fontSize="24px">
                CSS
              </Text>
              <Text textAlign="center" fontSize="16px">
                Cascading Style Sheets is a mechanism for adding style to a web
                document.
              </Text>
            </Stack>
          </Box>

          <Box
            boxShadow="dark-lg"
            borderRadius="8"
            border="1px solid "
            borderColor={color}
            w="100%"
            h="100%"
          >
            <Stack
              bgColor="transparent"
              alignItems="center"
              textAlign="center"
              p="8"
            >
              <SiJavascript size={80} />
              <Text fontWeight="medium" color={color} fontSize="24px">
                JavaScript
              </Text>
              <Text textAlign="center" fontSize="16px">
                JavaScript is a structured, multi-paradigm, weak dynamically
                typed, high-level scripting interpreted programming language.
              </Text>
            </Stack>
          </Box>

          <Box
            boxShadow="dark-lg"
            borderRadius="8"
            border="1px solid "
            borderColor={color}
            w="100%"
            h="100%"
          >
            <Stack
              bgColor="transparent"
              alignItems="center"
              textAlign="center"
              p="8"
            >
              <SiTypescript size={80} />

              <Text fontWeight="medium" color={color} fontSize="24px">
                Typescript
              </Text>
              <Text textAlign="lefcentert" fontSize="16px">
                TypeScript is an open source programming language developed by
                Microsoft. It is a strict syntactic superset of JavaScript and
                adds optional static typing to the language.
              </Text>
            </Stack>
          </Box>

          <Box
            boxShadow="dark-lg"
            borderRadius="8"
            border="1px solid "
            borderColor={color}
            w="100%"
            h="100%"
          >
            <Stack
              bgColor="transparent"
              alignItems="center"
              textAlign="center"
              p="8"
            >
              <SiReact size={80} />

              <Text fontWeight="medium" color={color} fontSize="24px">
                React
              </Text>
              <Text textAlign="center" fontSize="16px">
                JavaScript library focused on creating user interfaces on web
                pages. It is maintained by Facebook.
              </Text>
            </Stack>
          </Box>

          <Box
            boxShadow="dark-lg"
            borderRadius="8"
            border="1px solid "
            borderColor={color}
            w="100%"
            h="100%"
          >
            <Stack
              bgColor="transparent"
              alignItems="center"
              textAlign="center"
              p="8"
            >
              <SiNextdotjs size={80} />

              <Text fontWeight="medium" color={color} fontSize="24px">
                Next.js
              </Text>
              <Text textAlign="center" fontSize="16px">
                Open source React front-end development web framework created by
                Vercel that enables functionality such as server-side rendering
                and static website generation for React-based web applications.
              </Text>
            </Stack>
          </Box>

          <Box
            boxShadow="dark-lg"
            borderRadius="8"
            border="1px solid "
            borderColor={color}
            w="100%"
            h="100%"
          >
            <Stack
              bgColor="transparent"
              alignItems="center"
              textAlign="center"
              p="8"
            >
              <SiNodedotjs size={80} />

              <Text fontWeight="medium" color={color} fontSize="24px">
                Node
              </Text>
              <Text textAlign="center" fontSize="16px">
                An open-source, cross-platform software, based on Google's V8
                interpreter, that allows the execution of JavaScript code
                outside of a web browser.
              </Text>
            </Stack>
          </Box>

          <Box
            boxShadow="dark-lg"
            borderRadius="8"
            border="1px solid "
            borderColor={color}
            w="100%"
            h="100%"
          >
            <Stack
              bgColor="transparent"
              alignItems="center"
              textAlign="center"
              p="8"
            >
              <HStack>
                <SiGit size={80} />
                <SiGithub size={80} />
                <SiGitlab size={80} />
              </HStack>

              <Text fontWeight="medium" color={color} fontSize="24px">
                Git, Github and Gitlab
              </Text>
              <Text textAlign="center" fontSize="16px">
                Source code and file hosting platform with version control using
                Git. It allows programmers, utilities or any user registered on
                the platform to contribute to private and/or Open Source
                projects from anywhere in the world.
              </Text>
            </Stack>
          </Box>

          <Box
            boxShadow="dark-lg"
            borderRadius="8"
            border="1px solid "
            borderColor={color}
            w="100%"
            h="100%"
          >
            <Stack
              bgColor="transparent"
              alignItems="center"
              textAlign="center"
              p="8"
            >
              <SiTailwindcss className="animate-pulse" size={80} />

              <Text fontWeight="medium" color={color} fontSize="24px">
                TailwindCSS
              </Text>
              <Text textAlign="center" fontSize="16px">
                A utility-first CSS framework for rapidly building custom user
                interfaces.
              </Text>
            </Stack>
          </Box>

          <Box
            boxShadow="dark-lg"
            borderRadius="8"
            border="1px solid "
            borderColor={color}
            w="100%"
            h="100%"
          >
            <Stack
              bgColor="transparent"
              alignItems="center"
              textAlign="center"
              p="8"
            >
              <SiStyledcomponents className="animate-pulse" size={80} />

              <Text fontWeight="medium" color={color} fontSize="24px">
                Styled Components
              </Text>
              <Text textAlign="center" fontSize="16px">
                A popular library that is used to style React applications. It
                allows you to build custom components by writing actual CSS in
                your JavaScript.
              </Text>
            </Stack>
          </Box>

          <Box
            boxShadow="dark-lg"
            borderRadius="8"
            border="1px solid "
            borderColor={color}
            w="100%"
            h="100%"
          >
            <Stack
              bgColor="transparent"
              alignItems="center"
              textAlign="center"
              p="8"
            >
              <SiSass className="animate-pulse" size={80} />

              <Text fontWeight="medium" color={color} fontSize="24px">
                Sass
              </Text>
              <Text textAlign="center" fontSize="16px">
                Stylesheet language initially conceived by Hampton Catlin and
                developed by Natalie Weizenbaum.
              </Text>
            </Stack>
          </Box>

          <Box
            boxShadow="dark-lg"
            borderRadius="8"
            border="1px solid "
            borderColor={color}
            w="100%"
            h="100%"
          >
            <Stack
              bgColor="transparent"
              alignItems="center"
              textAlign="center"
              p="8"
            >
              <SiPuppeteer className="animate-pulse" size={80} />

              <Text fontWeight="medium" color={color} fontSize="24px">
                Puppeteer
              </Text>
              <Text textAlign="center" fontSize="16px">
                A Node.js library which provides a high-level API to control
                Chrome/Chromium over the DevTools Protocol.
              </Text>
            </Stack>
          </Box>

          <Box
            boxShadow="dark-lg"
            borderRadius="8"
            border="1px solid "
            borderColor={color}
            w="100%"
            h="100%"
          >
            <Stack
              bgColor="transparent"
              alignItems="center"
              textAlign="center"
              p="8"
            >
              <SiJest className="animate-pulse" size={80} />

              <Text fontWeight="medium" color={color} fontSize="24px">
                Jest
              </Text>
              <Text textAlign="center" fontSize="16px">
                A JavaScript testing framework built on top of Jasmine and
                maintained by Meta.
              </Text>
            </Stack>
          </Box>

          <Box
            boxShadow="dark-lg"
            borderRadius="8"
            border="1px solid "
            borderColor={color}
            w="100%"
            h="100%"
          >
            <Stack
              bgColor="transparent"
              alignItems="center"
              textAlign="center"
              p="8"
            >
              <SiMongodb className="animate-pulse" size={80} />

              <Text fontWeight="medium" color={color} fontSize="24px">
                MongoDB
              </Text>
              <Text textAlign="center" fontSize="16px">
                Open-source, cross-platform document-oriented database software
                written in the C++ language. Classified as a NoSQL database
              </Text>
            </Stack>
          </Box>

          <Box
            boxShadow="dark-lg"
            borderRadius="8"
            border="1px solid "
            borderColor={color}
            w="100%"
            h="100%"
          >
            <Stack
              bgColor="transparent"
              alignItems="center"
              textAlign="center"
              p="8"
            >
              <DiMysql className="animate-pulse" size={80} />

              <Text fontWeight="medium" color={color} fontSize="24px">
                MySQL
              </Text>
              <Text textAlign="center" fontSize="16px">
                MySQL is a database management system, which uses the SQL
                language as an interface. It is currently one of Oracle
                Corporation's most popular database management systems.
              </Text>
            </Stack>
          </Box>

          <Box
            boxShadow="dark-lg"
            borderRadius="8"
            border="1px solid "
            borderColor={color}
            w="100%"
            h="100%"
          >
            <Stack
              bgColor="transparent"
              alignItems="center"
              textAlign="center"
              p="8"
            >
              <SiLinux className="animate-pulse" size={80} />

              <Text fontWeight="medium" color={color} fontSize="24px">
                Linux
              </Text>
              <Text textAlign="center" fontSize="16px">
                Linux is a term popularly used to refer to operating systems or
                operating systems that use the Linux Kernel.
              </Text>
            </Stack>
          </Box>

          <Box
            boxShadow="dark-lg"
            borderRadius="8"
            border="1px solid "
            borderColor={color}
            w="100%"
            h="100%"
          >
            <Stack
              bgColor="transparent"
              alignItems="center"
              textAlign="center"
              p="8"
            >
              <SiDocker className="animate-pulse" size={80} />

              <Text fontWeight="medium" color={color} fontSize="24px">
                Docker
              </Text>
              <Text textAlign="center" fontSize="16px">
                Docker is a set of platform-as-a-service products that use
                operating system-level virtualization to deliver software in
                packages called containers.
              </Text>
            </Stack>
          </Box>

          <Box
            boxShadow="dark-lg"
            borderRadius="8"
            border="1px solid "
            borderColor={color}
            w="100%"
            h="100%"
          >
            <Stack
              bgColor="transparent"
              alignItems="center"
              textAlign="center"
              p="8"
            >
              <SiFigma className="animate-pulse" size={80} />

              <Text fontWeight="medium" color={color} fontSize="24px">
                Figma
              </Text>
              <Text textAlign="center" fontSize="16px">
                Figma is a vector graphics editor and design project prototyping
                based primarily on the web browser.
              </Text>
            </Stack>
          </Box>

          <Box
            boxShadow="dark-lg"
            borderRadius="8"
            border="1px solid "
            borderColor={color}
            w="100%"
            h="100%"
          >
            <Stack
              bgColor="transparent"
              alignItems="center"
              textAlign="center"
              p="8"
            >
              <SiChakraui className="animate-pulse" size={80} />

              <Text fontWeight="medium" color={color} fontSize="24px">
                Chakra UI
              </Text>
              <Text textAlign="center" fontSize="16px">
                Modular and accessible component library that gives you the
                building blocks you need to build your React applications.
              </Text>
            </Stack>
          </Box>
        </>
      </SimpleGrid>
    </>
  );
};

export default Home;
