import { Container, Text, VStack, Heading, Button, Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Travel Booking</Heading>
        <Text fontSize="lg">Plan your perfect trip with us</Text>
        <Box boxSize="sm">
          <Image src="/images/travel.jpg" alt="Travel" />
        </Box>
        <Button as={Link} to="/book" colorScheme="teal" size="lg">
          Start Booking
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;