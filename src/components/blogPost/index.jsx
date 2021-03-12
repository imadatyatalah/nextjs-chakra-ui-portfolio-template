import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react"
import { useRouter } from "next/router"
import NextLink from "next/link"
import dayjs from "dayjs"

import { tagColor } from "../UI/tagColor"
import TagComponent from "../UI/tag"

const BlogPost = ({ posts }) => {
  const router = useRouter()

  const summaryColor = useColorModeValue("gray.600", "gray.300")
  const dateColor = useColorModeValue("gray.500", "gray.400")

  return (
    <>
      {posts.map((post) => (
        <Box my="3" py="2" px="4" rounded="md" key={post.slug}>
          <Heading as="h3" fontSize="2xl" fontWeight="700">
            <NextLink href={`/blog/${post.slug}`}>
              <a>{post.title}</a>
            </NextLink>
          </Heading>

          <Text fontSize="17px" fontWeight="400" color={summaryColor} py="1">
            {post.summary}
          </Text>

          {post.tags.map((tag) => {
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

          {post.date && (
            <Text fontSize="16px" fontWeight="500" color={dateColor} py="1">
              {dayjs(post.date).format("MMMM DD, YYYY")}
            </Text>
          )}
        </Box>
      ))}
    </>
  )
}

export default BlogPost
