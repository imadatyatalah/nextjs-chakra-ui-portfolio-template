import Image from "next/image"

import {
  CustomLink,
  UnorderedList,
  OrderedList,
  ListItem,
  InlineCode,
} from "./common"
import Headings from "./headings"
import CodeBlock from "./codeBlock"

const MDXComponents = {
  h1: (props) => <Headings as="h1" fontSize="40px" {...props} />,
  h2: (props) => <Headings as="h2" fontSize="30px" {...props} />,
  h3: (props) => <Headings as="h3" fontSize="26px" {...props} />,
  h4: (props) => <Headings as="h4" fontSize="22px" {...props} />,
  h5: (props) => <Headings as="h5" fontSize="18px" {...props} />,
  h6: (props) => <Headings as="h6" fontSize="16px" {...props} />,

  code: CodeBlock,
  a: CustomLink,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  inlineCode: InlineCode,
  Image,
}

export default MDXComponents
