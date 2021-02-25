import { Box, chakra, Heading, Text, useColorModeValue } from "@chakra-ui/react"
import NextLink from "next/link"
import dayjs from "dayjs"

const BlogPost = ({ data }) => {
  const bg = useColorModeValue("gray.50", "gray.700")
  const summaryColor = useColorModeValue("gray.600", "gray.300")
  const dateColor = useColorModeValue("gray.500", "gray.400")

  return (
    <>
      {data.map((item) => (
        <NextLink href={`/blog/${item.slug}`} key={item.title}>
          <chakra.a href={`/blog/${item.slug}`}>
            <Box
              my="3"
              py="2"
              px="4"
              bgColor={bg}
              rounded="md"
              border="1px"
              borderColor="telegram.300"
              _hover={{ borderColor: "telegram.500" }}
            >
              <Heading as="h3" fontSize="2xl" fontWeight="700">
                {item.title}
              </Heading>

              <Text fontWeight="400" color={summaryColor} py="1">
                {item.summary}
              </Text>

              {item.date && (
                <Text fontWeight="400" color={dateColor} py="1">
                  {dayjs(item.date).format("MMM DD, YYYY")}
                </Text>
              )}
            </Box>
          </chakra.a>
        </NextLink>
      ))}
    </>
  )
}

export default BlogPost
