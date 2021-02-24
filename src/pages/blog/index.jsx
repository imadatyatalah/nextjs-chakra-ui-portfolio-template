import { getAllFilesFrontMatter } from "../../lib/posts"

const index = ({ posts }) => {
  return <></>
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog")

  return { props: { posts } }
}

export default index
