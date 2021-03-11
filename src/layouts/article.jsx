import { useRouter } from "next/router"
import {
  Box,
  Flex,
  Heading,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import { MDXProvider } from "@mdx-js/react"
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
        <Box as="section" px={{ md: "10", lg: "20", xl: "40" }} py="4">
          <Box as="header" textAlign="center">
            <Heading as="h1" py="4" size="2xl">
              {frontMatter.title}
            </Heading>

            <Flex direction="column">
              <Text fontSize="16px" color={color} py="1">
                {frontMatter.author} /{" "}
                {dayjs(frontMatter.date).format("MMMM DD, YYYY")} /{" "}
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

          <Box as="article">{children}</Box>
        </Box>
      </MDXProvider>
    </>
  )
}

export default Article
