import { Box, Container, Heading, Text, Flex, Link, VStack, HStack, Spacer, Button, useColorModeValue, Image } from "@chakra-ui/react";
import { FaHome, FaTags, FaUser } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const color = useColorModeValue("gray.800", "white");

  return (
    <Container maxW="2xl" py={10} fontFamily="serif">
      <VStack spacing={6}>
        {/* Title */}
        <Heading as="h1" size="2xl" color={color}>
          The Narrow Path
        </Heading>

        {/* Navigation */}
        <Flex as="nav" w="full" justify="center">
          <HStack as="ul" listStyleType="none" spacing={8}>
            <Box as="li">
              <Button as={Link} variant="ghost" leftIcon={<FaHome />} color={color}>
                Home
              </Button>
            </Box>
            <Box as="li">
              <Button as={Link} variant="ghost" leftIcon={<FaTags />} color={color}>
                Categories
              </Button>
            </Box>
            <Box as="li">
              <Button as={Link} variant="ghost" leftIcon={<FaUser />} color={color}>
                About
              </Button>
            </Box>
          </HStack>
        </Flex>

        {/* Post Preview */}
        <Box w="full" bg={bgColor} p={6} rounded="md" boxShadow="md">
          <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between">
            <VStack align="flex-start" spacing={2} flex="1">
              <Heading as="h3" size="lg" color={color}>
                A Walk in the Woods
              </Heading>
              <Text color={color}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet...</Text>
              <Button colorScheme="teal" size="sm">
                Read More
              </Button>
            </VStack>
            <Spacer />
            <Box w={{ base: "100%", md: "40%" }} mt={{ base: 4, md: 0 }}>
              <Image src="https://images.unsplash.com/photo-1579551049826-7c13b6bc241c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBwYXRofGVufDB8fHx8MTcxMjM4MzgxMnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Forest Path" rounded="md" />
            </Box>
          </Flex>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
