import Image from "next/image"

import CodeBlock from "./codeBlock"
import CustomLink from "./customLink"

const MDXComponents = {
  a: CustomLink,
  code: CodeBlock,

  Image,
}

export default MDXComponents
