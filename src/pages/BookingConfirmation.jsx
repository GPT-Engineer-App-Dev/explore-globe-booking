import { Container, VStack, Heading, Text, Box } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const BookingConfirmation = () => {
  const location = useLocation();
  const { flightDetails, passengerDetails, confirmationNumber } = location.state || {};

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Booking Confirmation</Heading>
        {flightDetails && passengerDetails && confirmationNumber ? (
          <>
            <Box p={5} shadow="md" borderWidth="1px" width="100%">
              <Heading as="h2" size="md">Flight Information</Heading>
              <Text>Departure City: {flightDetails.departureCity}</Text>
              <Text>Destination City: {flightDetails.destinationCity}</Text>
              <Text>Departure Date: {flightDetails.departureDate}</Text>
              <Text>Return Date: {flightDetails.returnDate}</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" width="100%">
              <Heading as="h2" size="md">Passenger Details</Heading>
              <Text>Name: {passengerDetails.name}</Text>
              <Text>Email: {passengerDetails.email}</Text>
              <Text>Number of Passengers: {passengerDetails.passengers}</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" width="100%">
              <Heading as="h2" size="md">Confirmation Number</Heading>
              <Text>{confirmationNumber}</Text>
            </Box>
          </>
        ) : (
          <Text>No booking details available.</Text>
        )}
      </VStack>
    </Container>
  );
};

export default BookingConfirmation;