import { NextSeo } from "next-seo"
import hydrate from "next-mdx-remote/hydrate"

import { getFiles, getFileBySlug } from "../../lib/posts"
import { seo } from "../../../config"
import MDXComponents from "../../components/MDXComponents"
import Article from "../../layouts/article"

const BlogPost = ({ mdxSource, frontMatter }) => {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  })

  const title = `${frontMatter.title} | ${seo.title}`
  const description = frontMatter.summary
  const url = `${seo.canonical}blog/${frontMatter.slug}`

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
            publishedTime: frontMatter.date,
            tags: frontMatter.tags?.map((tag) => tag),
          },
        }}
      />

      <Article frontMatter={frontMatter}>{content}</Article>
    </>
  )
}

export async function getStaticPaths() {
  const posts = await getFiles("blog")

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.replace(/\.mdx/, ""),
      },
    })),

    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug("blog", params.slug)

  return { props: post }
}

export default BlogPost
