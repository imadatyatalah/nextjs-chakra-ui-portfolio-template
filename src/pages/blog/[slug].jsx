import { useMemo } from "react"
import { NextSeo } from "next-seo"
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
import { MdEdit } from "react-icons/md"
import { getMDXComponent } from "mdx-bundler/client"
import dayjs from "dayjs"

import { allPosts } from ".contentlayer/data"
import { seo } from "config"
import { tagColor } from "@/components/UI/tagColor"
import MDXComponents from "@/components/MDXComponents"
import TagComponent from "@/components/UI/tag"

const BlogPost = ({ post }) => {
  const { push } = useRouter()

  const color = useColorModeValue("gray.700", "gray.400")

  const Component = useMemo(
    () => getMDXComponent(post.body.code),
    [post.body.code]
  )

  return (
    <>
      <NextSeo
        title={`${post.title} | ${seo.title}`}
        description={post.summary}
        canonical={`${seo.canonical}blog/${post.slug}`}
        openGraph={{
          type: "article",
          article: {
            publishedTime: post.publishedAt,
            modifiedTime: post.modifiedAt,
            tags: post.tags?.map((tag) => tag),
          },
        }}
      />

      <Box
        as="section"
        px={{ md: "10", lg: "20", xl: "40" }}
        py="4"
        fontSize="16px"
      >
        <Box as="header" textAlign="center">
          <Heading as="h1" py="4" size="2xl">
            {post.title}
          </Heading>

          <Flex direction="column">
            <Text fontSize="16px" color={color} py="1">
              {post.author} / {dayjs(post.publishedAt).format("MMMM DD, YYYY")}{" "}
              / {post.readingTime.text}
            </Text>
            <Text py="1">
              {post.tags.map((tag) => {
                const color = tagColor[tag]

                return (
                  <TagComponent
                    color={color}
                    onClick={() =>
                      push({
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
          <Component components={{ ...MDXComponents }} />

          <Text fontWeight="500" py="6">
            <ChakraLink
              href={`https://github.com/imadatyatalah/nextjs-chakra-ui-portfolio-template/blob/main/src/data/blog/${post.slug}.mdx`}
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
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = allPosts.find((post) => post.slug === params?.slug)

  return { props: { post } }
}

export default BlogPost
