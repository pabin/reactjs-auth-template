import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <Flex minH={"80vh"} align={"center"} justify={"center"}>
      <Box textAlign="center" py={10} px={6}>
        <Heading
          display="inline-block"
          as="h2"
          size="2xl"
          bgGradient="linear(to-r, blue.400, blue.600)"
          backgroundClip="text"
        >
          404
        </Heading>
        <Text fontSize="18px" mt={3} mb={2}>
          Page Not Found
        </Text>
        <Text color={"gray.500"} mb={6}>
          The page you&apos;re looking for does not seem to exist
        </Text>

        <Button
          colorScheme="blue"
          bgGradient="linear(to-r, blue.400, blue.500, blue.600)"
          color="white"
          variant="solid"
        >
          <NavLink to="/">Go to Home</NavLink>
        </Button>
      </Box>
    </Flex>
  );
}
