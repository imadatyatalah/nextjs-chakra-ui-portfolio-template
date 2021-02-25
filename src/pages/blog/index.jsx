import { getAllFilesFrontMatter } from "../../lib/posts"
import BlogPost from "../../components/blogPost"

const index = ({ posts }) => {
  return (
    <>
      <BlogPost data={posts} />
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog")

  return { props: { posts } }
}

export default index
