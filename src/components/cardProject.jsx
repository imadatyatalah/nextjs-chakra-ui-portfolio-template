import {
  Badge,
  Box,
  Button,
  Image,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";

export function CardProject({ src, title, description }) {
  const { color } = useColorModeValue("telegram.500", "telegram.400");
  return (
    <Box maxW="sm" maxH="lg" overflow="hidden" borderRadius="lg">
      <Image w="100%" maxH="320px" src={src} />

      <Box align="center" p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
        </Box>

        <Text
          mt="1"
          textAlign="center"
          fontSize="24"
          fontWeight="semibold"
          as="h2"
          lineHeight="tight"
          noOfLines={2}
        >
          {title}
        </Text>
        <Text mt="1" fontWeight="semibold" lineHeight="tight" noOfLines={2}>
          <Tooltip label={description} placement="top" >{description}</Tooltip>
        </Text>

        <Button
          colorScheme="telegram"
          variant="outline"
          size="md"
          mt="4"
          fontSize="20px"
        >
          See more
        </Button>
      </Box>
    </Box>
  );
}
