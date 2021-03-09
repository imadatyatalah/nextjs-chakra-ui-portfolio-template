import {
  Box,
  Flex,
  Heading,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import NextLink from "next/link"
import dayjs from "dayjs"

import { tagColor } from "../../components/UI/tagColor"

const Header = ({ frontMatter }) => {
  const color = useColorModeValue("gray.700", "gray.400")

  return (
    <>
      <Box as="header" textAlign="center">
        <Heading as="h1" py="4" size="2xl">
          {frontMatter.title}
        </Heading>

        <Flex direction="column">
          <Text color={color} py="1">
            {frontMatter.author} /{" "}
            {dayjs(frontMatter.date).format("MMMM DD, YYYY")} /{" "}
            {frontMatter.readingTime.text}
          </Text>
          <Text py="1">
            {frontMatter.tags.map((tag) => {
              const color = tagColor[tag]

              return (
                <NextLink href={`/blog/tags/${tag}`} key={tag}>
                  <a>
                    <Tag
                      m="1"
                      size="lg"
                      pt="px"
                      pb="1"
                      bgColor={color.bgColor}
                      color={color.color}
                      transitionDuration="250ms"
                      cursor="pointer"
                      _hover={{
                        backgroundColor: color.hover,
                      }}
                    >
                      {tag}
                    </Tag>
                  </a>
                </NextLink>
              )
            })}
          </Text>
        </Flex>
      </Box>
    </>
  )
}

export default Header
