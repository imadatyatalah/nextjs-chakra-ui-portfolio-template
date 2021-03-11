import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import {
  Alert,
  AlertIcon,
  Box,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import NextLink from "next/link"
import dayjs from "dayjs"

import { getAllFilesFrontMatter } from "../../lib/posts"
import { tagColor } from "../../components/UI/tagColor"
import TagComponent from "../../components/UI/tag"

const Blog = ({ posts }) => {
  const router = useRouter()

  const [currentSelectedTag, setCurrentSelectedTag] = useState("")
  const [blogPost, setBlogPost] = useState(posts)

  const summaryColor = useColorModeValue("gray.600", "gray.300")
  const dateColor = useColorModeValue("gray.500", "gray.400")

  const filteredPosts = (tag) => {
    setCurrentSelectedTag(tag)
    const blogResults = posts.filter((post) => post.tags.includes(tag))
    setBlogPost(blogResults)
  }

  useEffect(() => {
    if (router.query?.tag !== undefined) {
      filteredPosts(router.query?.tag)
    }
  }, [router])

  return (
    <>
      <Box
        d="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
        flexWrap="wrap"
        m="1.5rem 0"
      >
        {Object.keys(tagColor).map((tag, index) => {
          const color = tagColor[tag]

          return (
            <Box key={index}>
              <TagComponent color={color} onClick={() => filteredPosts(tag)}>
                {tag}
              </TagComponent>
            </Box>
          )
        })}
      </Box>

      {blogPost.length > 0 ? (
        blogPost.map((item) => (
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
                <TagComponent
                  color={color}
                  onClick={() => filteredPosts(tag)}
                  key={tag}
                >
                  {tag}
                </TagComponent>
              )
            })}

            {item.date && (
              <Text fontSize="sm" fontWeight="500" color={dateColor} py="1">
                {dayjs(item.date).format("MMM DD, YYYY")}
              </Text>
            )}
          </Box>
        ))
      ) : (
        <Alert status="info" d="flex" justifyContent="center" borderRadius="md">
          <AlertIcon />
          <Text fontWeight="500">
            No blog post has been found about{" "}
            <Text as="strong" fontWeight="700">
              {currentSelectedTag.toUpperCase()}
            </Text>
            !
          </Text>
        </Alert>
      )}
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog")

  return { props: { posts } }
}

export default Blog
