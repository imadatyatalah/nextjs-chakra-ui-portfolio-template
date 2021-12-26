import { join } from "path";
import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import readingTime from "reading-time";
import remarkSlug from "remark-slug";
import renderToString from "next-mdx-remote/render-to-string";

import MDXComponents from "@/components/MDXComponents";

const root = process.cwd();

export async function getFiles(type) {
  return readdirSync(join(root, "src/data", type));
}

export async function getFileBySlug(type, slug) {
  const source = slug
    ? readFileSync(join(root, "src/data", type, `${slug}.mdx`), "utf8")
    : readFileSync(join(root, "src/data", `${type}.mdx`), "utf8");

  const { data, content } = matter(source);
  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [remarkSlug, require("remark-code-titles")],
    },
  });

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...data,
    },
  };
}

export async function getAllFilesFrontMatter(type) {
  const files = readdirSync(join(root, "src/data", type));

  return files.reduce((allPosts, postSlug) => {
    const source = readFileSync(join(root, "src/data", type, postSlug), "utf8");
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace(".mdx", ""),
      },
      ...allPosts,
    ];
  }, []);
}
