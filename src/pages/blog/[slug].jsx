import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import {
  Box,
  Flex,
  Heading,
  Text,
  Link as ChakraLink,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import { MdEdit } from "react-icons/md";
import dayjs from "dayjs";
import hydrate from "next-mdx-remote/hydrate";

import { getFiles, getFileBySlug } from "@/lib/posts";
import { seo } from "config";
import { tagColor } from "@/components/UI/tagColor";
import MDXComponents from "@/components/MDXComponents";
import TagComponent from "@/components/UI/tag";

const BlogPost = ({ mdxSource, frontMatter }) => {
  const { push } = useRouter();

  const color = useColorModeValue("gray.700", "gray.400");

  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });

  const title = frontMatter.title;
  const description = frontMatter.summary;
  const url = `${seo.canonical}blog/${frontMatter.slug}`;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          title,
          description,
          url,
          type: "article",
          article: {
            publishedTime: frontMatter.publishedAt,
            modifiedTime: frontMatter.modifiedAt,
            tags: frontMatter.tags?.map((tag) => tag),
          },
        }}
      />

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
                  const color = tagColor[tag];

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
                  );
                })}
              </Text>
            </Flex>
          </Box>

          <Box as="article">
            {content}

            <Text fontWeight="500" py="6">
              <ChakraLink
                href={`https://github.com/imadatyatalah/nextjs-chakra-ui-portfolio-template/blob/main/src/data/blog/${frontMatter.slug}.mdx`}
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
  );
};

export const getStaticPaths = async () => {
  const posts = await getFiles("blog");

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.replace(/\.mdx/, ""),
      },
    })),

    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getFileBySlug("blog", params.slug);

  return { props: post };
};

export default BlogPost;
