import { defineDocumentType, makeSource } from "contentlayer/source-files"

import readingTime from "reading-time"
import remarkGfm from "remark-gfm"
import remarkSlug from "remark-slug"
import rehypeCodeTitles from "rehype-code-titles"

const computedFields = {
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },

  wordCount: {
    type: "number",
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
  },

  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
  },
}

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "blog/*.mdx",
  bodyType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    modifiedAt: { type: "string", required: true },
    author: { type: "string", required: true },
    summary: { type: "string", required: true },
    tags: { type: "json", required: true },
  },
  computedFields,
}))

const contentLayerConfig = makeSource({
  contentDirPath: "src/data",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm, remarkSlug],
    rehypePlugins: [rehypeCodeTitles],
  },
})

export default contentLayerConfig
