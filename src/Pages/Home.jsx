import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import metroHome from "@/assets/metroHome.jpg";

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Home = () => {
  const accentColor = "#EF7826";
  const darkBg = "#121212";
  const lightTextColor = "#EAEAEA";

  return (
    <Flex
      as="section"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      w="full"
      h="100vh"
      position="relative"
      overflow="hidden"
      backgroundImage={`url(${metroHome})`}
      backgroundSize="cover"
      backgroundPosition="center center"
      backgroundRepeat="no-repeat"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
        backgroundColor: "rgba(18, 18, 18, 0.65)",
      }}
    >
      <Box 
        textAlign="center" 
        zIndex={2}
        px={4}
        color={lightTextColor}
      >
        <Heading
          as="h1"
          fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
          fontWeight="bold"
          lineHeight="1.1"
          mb={6}
          fontFamily="'DM Sans', sans-serif"
        >
          Designing the Future's Foundation
        </Heading>
        <Text
          fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
          maxW="700px"
          mx="auto"
          mb={8}
          opacity={0.85}
      >
          We craft innovative and sustainable architectural solutions that inspire and endure.
        </Text>
        <Button
          as={Link}
          to="/projects"
          variant="outline"
          borderColor={accentColor}
          color={accentColor}
          rounded="full"
          size="lg"
          px={8}
          rightIcon={<FaArrowRight />}
          _hover={{ bg: accentColor, color: darkBg }}
          fontWeight="500"
        >
          Explore Our Work
        </Button>
      </Box>
    </Flex>
  );
};

export default Home;
