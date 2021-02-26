import { NextSeo } from "next-seo"
import hydrate from "next-mdx-remote/hydrate"

import { getFiles, getFileBySlug } from "../../lib/posts"
import { seo } from "../../../config"
import MDXComponents from "../../components/MDXComponents"
import Article from "../../components/article"

export default function Blog({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  })

  const title = frontMatter.title
  const siteTitle = seo.title

  return (
    <>
      <NextSeo
        title={`${title} | ${siteTitle}`}
        description={frontMatter.summary}
        canonical={`${seo.canonical}blog/${frontMatter.slug}`}
        openGraph={{
          title: title,
          description: frontMatter.summary,
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
