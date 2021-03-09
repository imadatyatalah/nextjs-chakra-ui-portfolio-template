import { getAllFilesFrontMatter } from "../../lib/posts"
import Post from "../../components/articlePost"

const Blog = ({ posts }) => {
  return (
    <>
      <Post data={posts} />
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog")

  return { props: { posts } }
}

export default Blog
