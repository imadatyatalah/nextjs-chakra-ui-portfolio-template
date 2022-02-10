import { Tag } from "@chakra-ui/react";

const TagComponent = ({ children, color, ...props }) => {
  return (
    <Tag
      fontSize=".9rem"
      fontWeight="600"
      color="white"
      backgroundColor={color.bgColor}
      minHeight="2rem"
      m="0 .5rem 7px 0"
      p=".3rem .75rem"
      cursor="pointer"
      transitionDuration="250ms"
      userSelect="none"
      _hover={{ backgroundColor: color.hover }}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default TagComponent;
