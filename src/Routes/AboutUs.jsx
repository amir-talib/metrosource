/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import About from "@/assets/About.jpeg";
import Navbar from "@/components/MetroGlobal/Navbar";
import CoreValue2 from "@/assets/CoreValue1.png";
import ab1 from "@/assets/ab1.png";
import ab2 from "@/assets/ab2.png";
import ab3 from "@/assets/ab3.png";
import ab4 from "@/assets/ab4.png";
import CEO from "@/assets/AboutCEO.png";
import Footer from "@/components/MetroGlobal/Footer";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionText = motion(Text);

const AboutUs = () => {
  const teams = [
    {
      id: 1,
      img: ab1,
      name: "Arc Abdullahi Bello Shu'aibu",
      role: "MD/CEO",
    },
    {
      id: 2,
      img: ab2,
      name: "Arc Kayode Oyawoye",
      role: "EXECUTIVE PARTNER",
    },
    {
      id: 3,
      img: ab3,
      name: "Arc Jibrilla Sahabo",
      role: "HEAD OF STUDIO",
    },
    {
      id: 4,
      img: ab4,
      name: "Asma'u Abubakar",
      role: "ACCOUNTANT",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Define colors directly since we're using a dark theme
  const bgColor = "gray.900";
  const textColor = "white";
  const accentColor = "#EF7826";
  const glassBg = "rgba(255, 255, 255, 0.1)";

  return (
    <Flex
      bg={bgColor}
      flex={1}
      w={"100%"}
      height={"fit-content"}
      flexDirection={"column"}>
      <Navbar />
      <Flex
        position="relative"
        w="100%"
        h="100vh"
        overflow="hidden"
        alignItems="center"
        justifyContent="center">
        <Image
          src={About}
          position="absolute"
          w="100%"
          h="100%"
          objectFit="cover"
          opacity={0.4}
        />
        <Box
          position="absolute"
          w="100%"
          h="100%"
          bg="linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.3))"
        />
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          zIndex={1}
          textAlign="center"
          px={8}>
          <Text
            fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
            fontWeight="bold"
            color={textColor}
            mb={6}>
            About Metrosource
          </Text>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color={textColor}
            maxW="800px"
            mx="auto">
            Redefining Architecture Through Innovation and Excellence
          </Text>
        </MotionBox>
      </Flex>

      <Flex
        ref={ref}
        width={"100%"}
        height={"100%"}
        py={20}
        gap={10}
        px={{ base: 4, md: 10 }}
        flexDirection={"column"}
        position="relative">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          bg={glassBg}
          backdropFilter="blur(10px)"
          p={8}
          borderRadius="2xl"
          boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)">
          <Text
            fontSize={{ base: "2xl", md: "4xl" }}
            color={textColor}
            fontWeight={"medium"}
            mb={8}>
            Meet Metrosource
          </Text>
          <Box w={"full"}>
            <Text
              fontWeight={"normal"}
              mb={6}
              fontSize={{ base: "md", md: "lg" }}
              color={textColor}
              lineHeight="tall">
              Metrosource Limited is an indigenous firm that has been at the
              forefront of the design and construction industry in Nigeria since
              its establishment in 1998. With over two decades of experience, we
              have built a reputation for excellence, reliability, and
              innovation, providing premium, comprehensive services that cater
              to a wide range of clients, from private individuals to large
              corporations and government institutions.
            </Text>
            <Text
              fontWeight={"normal"}
              mb={6}
              fontSize={{ base: "md", md: "lg" }}
              color={textColor}
              lineHeight="tall">
              From inception, our vision has been to redefine the Nigerian
              construction industry by integrating cutting-edge technology,
              modern design principles, and sustainable building practices. Our
              deep-rooted commitment to professionalism, perfection, and client
              satisfaction has set us apart, allowing us to deliver projects
              that not only meet but exceed expectations.
            </Text>
            <Text
              fontWeight={"normal"}
              mb={6}
              fontSize={{ base: "md", md: "lg" }}
              color={textColor}
              lineHeight="tall">
              Metrosource Limited is owned and managed by a team of highly
              skilled, creative, and motivated professionals with decades of
              combined experience in architecture, civil engineering, urban
              planning, project management, and structural design.
            </Text>
          </Box>
        </MotionBox>
      </Flex>

      <Image
        src={CoreValue2}
        w={"100%"}
        fit={["contain", "contain", "contain", "contain"]}
        height={{ smDown: "55vh", smToLg: "55vh", lgTo2xl: "150vh" }}
      />

      <Flex
        width={"100%"}
        height={"100vh"}
        position={"relative"}
        p={{ base: 4, md: 8 }}>
        <Image
          src={CEO}
          rounded={"2xl"}
          w={"100%"}
          height={"100%"}
          objectFit="cover"
        />
        <MotionFlex
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          flexDirection={"column"}
          gap={4}
          width={{
            base: "100%",
            md: "55%",
            lg: "35%",
          }}
          height={"fit-content"}
          bg={glassBg}
          backdropFilter="blur(10px)"
          position={"absolute"}
          bottom={8}
          left={{ base: 4, md: 8 }}
          p={8}
          rounded={"2xl"}>
          <Text
            color={textColor}
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight={"medium"}
            lineHeight="tall">
            "WE ARE SHARPENING OUR STRATEGY TO BE ONE OF THE WORLD'S MOST
            VALUABLE, MOST INNOVATIVE AND MOST ADMIRED COMPANIES"
          </Text>
          <Text
            color={accentColor}
            fontWeight={"500"}
            fontSize={{ base: "sm", md: "md" }}>
            FOUNDER | Abdullah Bello Shuaibu
          </Text>
          <Button
            width={"fit-content"}
            bg={accentColor}
            px={6}
            py={4}
            fontWeight={"light"}
            color={textColor}
            rounded={"3xl"}
            _hover={{ bg: "orange.600" }}>
            Read Founder's Letter
          </Button>
        </MotionFlex>
      </Flex>

      <Flex
        width={"100%"}
        flexDirection={"column"}
        px={{ base: 4, md: 10 }}
        py={20}>
        <MotionFlex
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          flexDirection={"column"}
          alignItems={"center"}
          gap={6}
          py={8}
          px={{ base: 4, md: "20rem" }}>
          <Text
            color={textColor}
            textAlign={"center"}
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight={"medium"}>
            Meet the Team
          </Text>
          <Text
            color={accentColor}
            fontSize="lg"
            fontWeight={"normal"}
            textAlign={"center"}>
            The Dream Team Committed to Excellence
          </Text>
        </MotionFlex>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 4 }}
          gap={8}>
          {teams.map((team, index) => (
            <MotionBox
              key={team.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              position={"relative"}
              w={"100%"}
              h="400px"
              overflow="hidden"
              borderRadius="2xl"
              whileHover={{ y: -8 }}
              animate={{ transition: { duration: 0.3, ease: "ease" } }}>
              <Image
                src={team.img}
                w="100%"
                h="100%"
                objectFit="cover"
              />
              <Box
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                p={6}
                bg="linear-gradient(to top, rgba(0,0,0,0.8), transparent)"
                color={textColor}>
                <Text fontSize="xl" fontWeight="bold">
                  {team.name}
                </Text>
                <Text color={accentColor}>{team.role}</Text>
            </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Flex>
      <Footer />
    </Flex>
  );
};

export default AboutUs;
