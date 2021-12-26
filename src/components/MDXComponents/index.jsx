import Image from "next/image";

import {
  CustomLink,
  UnorderedList,
  OrderedList,
  ListItem,
  InlineCode,
} from "./common";
import Headings from "./headings";
import CodeBlock from "./codeBlock";

const MDXComponents = {
  h1: (props) => <Headings as="h1" fontSize="36px" {...props} />,
  h2: (props) => <Headings as="h2" fontSize="28px" {...props} />,
  h3: (props) => <Headings as="h3" fontSize="24px" {...props} />,
  h4: (props) => <Headings as="h4" fontSize="18px" {...props} />,
  h5: (props) => <Headings as="h5" fontSize="16px" {...props} />,
  h6: (props) => <Headings as="h6" fontSize="14px" {...props} />,

  code: CodeBlock,
  a: CustomLink,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  inlineCode: InlineCode,
  Image,
};

export default MDXComponents;
