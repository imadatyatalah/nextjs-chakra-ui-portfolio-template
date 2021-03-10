import { useRouter } from "next/router"
import { Box, Heading, Tag, Text, useColorModeValue } from "@chakra-ui/react"
import NextLink from "next/link"
import dayjs from "dayjs"

import { tagColor } from "../UI/tagColor"

const ArticlePost = ({ data }) => {
  const router = useRouter()

  const summaryColor = useColorModeValue("gray.600", "gray.300")
  const dateColor = useColorModeValue("gray.500", "gray.400")

  return (
    <>
      {data.map((item) => (
        <Box my="3" py="2" px="4" rounded="md" key={item.slug}>
          <Heading as="h3" fontSize="2xl" fontWeight="700">
            <NextLink href={`/blog/${item.slug}`}>
              <a>{item.title}</a>
            </NextLink>
          </Heading>

          <Text fontWeight="400" color={summaryColor} py="1">
            {item.summary}
          </Text>

          {item.tags.map((tag) => {
            const color = tagColor[tag]

            return (
              <Tag
                m="1"
                size="md"
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
                key={tag}
              >
                {tag}
              </Tag>
            )
          })}

          {item.date && (
            <Text fontSize="sm" fontWeight="500" color={dateColor} py="1">
              {dayjs(item.date).format("MMM DD, YYYY")}
            </Text>
          )}
        </Box>
      ))}
    </>
  )
}

export default ArticlePost
