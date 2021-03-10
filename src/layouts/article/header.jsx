import { useRouter } from "next/router"
import {
  Box,
  Flex,
  Heading,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import dayjs from "dayjs"

import { tagColor } from "../../components/UI/tagColor"

const Header = ({ frontMatter }) => {
  const router = useRouter()
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
                  onClick={() =>
                    router.push({
                      pathname: "/blog/",
                      query: { tag },
                    })
                  }
                >
                  {tag}
                </Tag>
              )
            })}
          </Text>
        </Flex>
      </Box>
    </>
  )
}

export default Header
