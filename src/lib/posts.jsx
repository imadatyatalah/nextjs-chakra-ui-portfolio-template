import fs from "fs"
import matter from "gray-matter"
import path from "path"
import readingTime from "reading-time"
import { serialize } from "next-mdx-remote/serialize"

const root = process.cwd()

export async function getFiles(type) {
  return fs.readdirSync(path.join(root, "src/data", type))
}

export async function getFileBySlug(type, slug) {
  const source = slug
    ? fs.readFileSync(path.join(root, "src/data", type, `${slug}.mdx`), "utf8")
    : fs.readFileSync(path.join(root, "src/data", `${type}.mdx`), "utf8")

  const { data, content } = matter(source)
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [require("remark-slug"), require("remark-code-titles")],
    },
  })

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...data,
    },
  }
}

export async function getAllFilesFrontMatter(type) {
  const files = fs.readdirSync(path.join(root, "src/data", type))

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, "src/data", type, postSlug),
      "utf8"
    )
    const { data } = matter(source)

    return [
      {
        ...data,
        slug: postSlug.replace(".mdx", ""),
      },
      ...allPosts,
    ]
  }, [])
}
