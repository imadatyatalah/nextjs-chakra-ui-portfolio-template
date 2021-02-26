import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import dayjs from "dayjs"

const Header = ({ frontMatter }) => (
  <>
    <Box as="header">
      <Heading as="h1" size="2xl">
        {frontMatter.title}
      </Heading>

      <Flex py="1" direction="column" fontWeight="400">
        <Text>
          {frontMatter.author} /{" "}
          {dayjs(frontMatter.date).format("MMM DD, YYYY")}
        </Text>
        <Text>{frontMatter.readingTime.text}</Text>
      </Flex>
    </Box>
  </>
)

export default Header
