import { Box, Button, Container, Flex, IconButton, Input, InputGroup, InputRightElement, List, ListItem, Text, VStack, useColorModeValue, Image, Center, Heading, Spinner } from "@chakra-ui/react";
import { FaCloudUploadAlt, FaPlus, FaSearch, FaChevronRight, FaChevronLeft, FaMinus, FaExpandAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="100vw" minH="100vh" p={0} bg={useColorModeValue("gray.800", "gray.900")}>
      <Flex h="100vh">
        {/* Sidebar for uploaded PDFs */}
        <VStack w="300px" borderRight="1px" borderRightColor={useColorModeValue("gray.700", "gray.600")} p={4} spacing={4} alignItems="stretch">
          <Heading size="md" color="gray.200" mb={4}>
            Uploaded PDFs
          </Heading>
          <Button leftIcon={<FaPlus />} colorScheme="blue">
            Upload PDF
          </Button>
          <InputGroup>
            <Input placeholder="Search PDFs" />
            <InputRightElement children={<FaSearch color="gray.300" />} />
          </InputGroup>
          <List spacing={2} overflowY="auto" flex="1">
            {/* Example of an uploaded PDF */}
            <ListItem p={2} bg="gray.700" borderRadius="md">
              <Text color="gray.300">Smart Watch User Guide</Text>
            </ListItem>
            {/* More PDFs would be listed here */}
          </List>
        </VStack>

        {/* Main content */}
        <Flex direction="column" flex="1" p={4} overflowY="auto">
          {/* PDF Viewer */}
          <Center flex="1" flexDirection="column">
            <Image src="https://images.unsplash.com/photo-1495704907664-81f74a7efd9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHdhdGNoJTIwdXNlciUyMGd1aWRlfGVufDB8fHx8MTcwODUzNTE4OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Smart Watch User Guide" fallback={<Spinner />} maxW="100%" maxH="100%" />
          </Center>

          {/* PDF Controls */}
          <Flex justifyContent="space-between" alignItems="center" p={2}>
            <IconButton icon={<FaChevronLeft />} aria-label="Previous Page" />
            <Flex alignItems="center">
              <IconButton icon={<FaMinus />} aria-label="Zoom out" />
              <IconButton icon={<FaExpandAlt />} aria-label="Zoom to fit" />
              <IconButton icon={<FaPlus />} aria-label="Zoom in" />
            </Flex>
            <IconButton icon={<FaChevronRight />} aria-label="Next Page" />
          </Flex>

          {/* Chat Interface */}
          <Box bg="gray.700" p={4} borderRadius="md">
            <Text color="gray.300" mb={4}>
              Ask a question about the PDF:
            </Text>
            <InputGroup>
              <Input placeholder="Type your question here..." />
              <InputRightElement children={<FaCloudUploadAlt color="gray.300" />} />
            </InputGroup>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Index;
