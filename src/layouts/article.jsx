import { useRouter } from "next/router"
import {
  Box,
  Flex,
  Heading,
  Text,
  Link as ChakraLink,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react"
import { MDXProvider } from "@mdx-js/react"
import { MdEdit } from "react-icons/md"
import dayjs from "dayjs"

import { tagColor } from "../components/UI/tagColor"
import MDXComponents from "../components/MDXComponents"
import TagComponent from "../components/UI/tag"

const Article = ({ children, frontMatter }) => {
  const router = useRouter()

  const color = useColorModeValue("gray.700", "gray.400")

  return (
    <>
      <MDXProvider components={MDXComponents}>
        <Box
          as="section"
          px={{ md: "10", lg: "20", xl: "40" }}
          py="4"
          fontSize="16px"
        >
          <Box as="header" textAlign="center">
            <Heading as="h1" py="4" size="2xl">
              {frontMatter.title}
            </Heading>

            <Flex direction="column">
              <Text fontSize="16px" color={color} py="1">
                {frontMatter.author} /{" "}
                {dayjs(frontMatter.publishedAt).format("MMMM DD, YYYY")} /{" "}
                {frontMatter.readingTime.text}
              </Text>
              <Text py="1">
                {frontMatter.tags.map((tag) => {
                  const color = tagColor[tag]

                  return (
                    <TagComponent
                      color={color}
                      onClick={() =>
                        router.push({
                          pathname: "/blog/",
                          query: { tag },
                        })
                      }
                      key={tag}
                    >
                      {tag}
                    </TagComponent>
                  )
                })}
              </Text>
            </Flex>
          </Box>

          <Box as="article">
            {children}

            <Text fontWeight="500" py="6">
              <ChakraLink
                href={`https://github.com/imadatyatalah/portfolio-boilerplate-nextjs/blob/main/src/data/blog/${frontMatter.slug}.mdx`}
                d="flex"
                alignItems="flex-end"
                _focus={{ outline: "none" }}
                isExternal
              >
                <Icon as={MdEdit} w={6} h={6} marginRight="2" />
                Edit this page on github.
              </ChakraLink>
            </Text>
          </Box>
        </Box>
      </MDXProvider>
    </>
  )
}

export default Article
