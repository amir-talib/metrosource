import { motion, useScroll, useTransform } from "framer-motion";
import { Box, Flex, Image, SimpleGrid, Text, VStack, Heading, Container } from "@chakra-ui/react";
import { FaPencilRuler } from "react-icons/fa";
import { FaHelmetSafety } from "react-icons/fa6";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import build from "@/assets/build.jpeg";
import Footer from "@/components/MetroGlobal/Footer";
import service2 from "@/assets/service1a.png";
import service3 from "@/assets/service2a.png";
import service2a from "@/assets/service2.png";
import service3a from "@/assets/service3.png";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionText = motion(Text);
const MotionImage = motion(Image);

const Services = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const location = useLocation();

  const services = {
    architecture: {
      title: "Architecture",
      icon: <FaPencilRuler size={32} />,
      img: service3a,
      bio: "We specialize in providing innovative and high-quality architectural designs for your construction projects. Our team of experienced architects and designers are dedicated to delivering exceptional services that meet and exceed our clients expectations.",
      services: [
        "Project Planning and Design",
        "Urban Design and Landscape",
        "Interior Design",
        "Building Transformation and Adaptive Reuse",
        "Project Management"
      ]
    },
    engineering: {
      title: "Engineering",
      icon: <FaHelmetSafety size={32} />,
      img: service2a,
      bio: "Our skilled engineers provide diverse services, prioritizing quality construction with specialized solutions. Using renowned 'Green technology,' we ensure safe, efficient, and cost-effective outcomes.",
      services: [
        "Building Construction and Engineering",
        "Structural Engineering",
        "MEP Engineering",
        "Civil Engineering",
        "Project Management",
        "Project Monitoring and Evaluation",
        "Environmental Impact Analysis"
      ]
    }
  };

  // Brand colors
  const bgColor = "gray.900";
  const textColor = "white";
  const accentColor = "#EF7826";
  const cardBg = "rgba(255, 255, 255, 0.05)";
  const hoverBg = "rgba(255, 255, 255, 0.1)";

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const serviceCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  // Effect to handle scroll-to-hash
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <Flex w="100%" flexDirection="column" bg={bgColor} minH="100vh">
      {/* Hero Section with Parallax */}
      <Box position="relative" h="100vh" overflow="hidden">
        <MotionImage
          src={build}
          position="absolute"
          w="100%"
          h="120%"
          objectFit="cover"
          style={{ y }}
          opacity={0.4}
        />
        <Box
          position="absolute"
          w="100%"
          h="100%"
          bg="linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.4))"
        />
        <Container maxW="container.xl" h="100%" position="relative" zIndex={1}>
            <Flex
            direction="column"
            justify="center"
            align="center"
            h="100%"
            textAlign="center"
            px={4}>
            <MotionText
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}
              fontWeight="bold"
              color={textColor}
              mb={6}
              textShadow="2px 2px 4px rgba(0,0,0,0.3)">
              Our Services
            </MotionText>
            <MotionText
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              fontSize={{ base: "xl", md: "2xl" }}
              color={textColor}
              maxW="800px"
              opacity={0.9}>
              Comprehensive Solutions for Your Architectural and Engineering Needs
            </MotionText>
          </Flex>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxW="container.xl" py={20} px={4}>
        <VStack spacing={20} align="stretch">
          {Object.entries(services).map(([key, service], index) => (
            <MotionBox
              key={key}
              id={key}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              bg={cardBg}
              borderRadius="2xl"
              overflow="hidden"
              backdropFilter="blur(10px)"
              boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
              border="1px solid rgba(255, 255, 255, 0.1)">
              <Flex direction="column" h="100%">
                {/* Image Section */}
                <Box position="relative" h="400px" overflow="hidden">
                  <MotionImage
                    src={service.img}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
              />
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bg="linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6))"
                  />
                <Flex
                    position="absolute"
                    top={4}
                    left={4}
                    p={3}
                    bg={accentColor}
                    borderRadius="full"
                    color={textColor}>
                    {service.icon}
                </Flex>
                </Box>

                {/* Content Section */}
                <VStack
                  align="stretch"
                  p={{ base: 6, md: 10 }}
                  spacing={8}
                  flex={1}
                  bg="rgba(0,0,0,0.3)">
                  <Heading
                    fontSize={{ base: "3xl", md: "4xl" }}
                    color={textColor}
                    fontWeight="bold"
                    textAlign="center">
                    {service.title}
                  </Heading>
                  
                <Text
                    fontSize={{ base: "lg", md: "xl" }}
                    color={textColor}
                    opacity={0.9}
                    lineHeight="tall"
                    textAlign="center"
                    maxW="800px"
                    mx="auto">
                    {service.bio}
                </Text>

                  {/* Services Card Row */}
                  <Flex
                    wrap="wrap"
                    justify="center"
                    align="center"
                    gap={6}
                    mt={10}
                  >
                    {service.services.map((item, idx) => (
                      <MotionBox
                        key={idx}
                        variants={serviceCardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        }}
                        bg={hoverBg}
                        borderRadius="2xl"
                        p={6}
                        m={2}
                        minW={{ base: "90vw", sm: "320px" }}
                        maxW="340px"
                        flex="1 1 320px"
                        boxShadow="0 4px 20px rgba(0,0,0,0.08)"
                        cursor="pointer"
                        _hover={{
                          bg: "rgba(255,255,255,0.15)",
                          boxShadow: "0 8px 32px rgba(0,0,0,0.18)"
                        }}>
                <Text
                          color={textColor}
                          fontSize={{ base: "md", md: "lg" }}
                          fontWeight="medium"
                          textAlign="center">
                          {item}
                </Text>
                      </MotionBox>
                    ))}
                  </Flex>
                </VStack>
              </Flex>
            </MotionBox>
        ))}
        </VStack>
      </Container>
      <Footer />
    </Flex>
  );
};

export default Services;
