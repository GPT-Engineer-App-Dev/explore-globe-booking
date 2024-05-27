import { useState } from "react";
import { Container, VStack, Heading, FormControl, FormLabel, Input, Button, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const FlightSearch = () => {
  const [departureCity, setDepartureCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);

  const navigate = useNavigate();

  const handleSearch = () => {
    const flightDetails = {
      departureCity,
      destinationCity,
      departureDate,
      returnDate,
    };

    const passengerDetails = {
      name: "John Doe", // Replace with actual passenger name
      email: "john.doe@example.com", // Replace with actual passenger email
      passengers,
    };

    const confirmationNumber = Math.floor(Math.random() * 1000000);

    navigate("/booking-confirmation", {
      state: { flightDetails, passengerDetails, confirmationNumber },
    });
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Search Flights</Heading>
        <FormControl id="departure-city">
          <FormLabel>Departure City</FormLabel>
          <Input
            type="text"
            value={departureCity}
            onChange={(e) => setDepartureCity(e.target.value)}
          />
        </FormControl>
        <FormControl id="destination-city">
          <FormLabel>Destination City</FormLabel>
          <Input
            type="text"
            value={destinationCity}
            onChange={(e) => setDestinationCity(e.target.value)}
          />
        </FormControl>
        <FormControl id="departure-date">
          <FormLabel>Departure Date</FormLabel>
          <Input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
        </FormControl>
        <FormControl id="return-date">
          <FormLabel>Return Date</FormLabel>
          <Input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </FormControl>
        <FormControl id="passengers">
          <FormLabel>Number of Passengers</FormLabel>
          <Input
            type="number"
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
            min={1}
          />
        </FormControl>
        <Button colorScheme="teal" size="lg" onClick={handleSearch}>
          Search Flights
        </Button>
      </VStack>
    </Container>
  );
};

export default FlightSearch;