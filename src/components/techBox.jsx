import { Box, Icon, Stack } from "@chakra-ui/react";

export function TechBox(icon, title, description, ...rest) {
  return (
    <Box
      boxShadow="dark-lg"
      borderRadius="8"
      border="1px solid "
      borderColor={color}
      w="100%"
      h="100%"
      variant={container}
      initial="hidden"
      animate="visible"
      {...rest}
    >
      <Stack alignItems="center" textAlign="center" p="8">
        <Icon as={icon} />
        <Text fontWeight="medium" color={color} fontSize="24px">
          {title}
        </Text>
        <Text fontSize="16px">{description}</Text>
      </Stack>
    </Box>
  );
}
