import { motion } from "framer-motion";
import {
  Box,
  Button,
  CloseButton,
  Dialog,
  Flex,
  Image,
  Portal,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import build from "@/assets/build2.jpeg";
import Footer from "@/components/MetroGlobal/Footer";
import fm1 from "@/assets/fmc.jpeg";
import fm2 from "@/assets/fmc2.jpg";
import fm3 from "@/assets/fmc3.jpg";
import fm4 from "@/assets/fmc4.jpg";
import fm5 from "@/assets/fmc5.jpg";
import fm6 from "@/assets/fmc6.jpg";
import jaha1 from "@/assets/jahi1.jpg";
import jaha2 from "@/assets/jahi2.jpg";
import jaha3 from "@/assets/jahi3.jpg";
import jaha4 from "@/assets/jahi4.jpg";
import jaha5 from "@/assets/jahi5.jpg";
import jaha6 from "@/assets/jahi6.jpg";
import jaha7 from "@/assets/jahi7.jpg";
import jaha8 from "@/assets/jahi8.jpg";
import mad1 from "@/assets/DBN1.jpg";
import mad2 from "@/assets/DBN0.jpeg";
import mad3 from "@/assets/01.jpeg";
import mad4 from "@/assets/02.jpeg";
import mad6 from "@/assets/03.jpeg";
import mad7 from "@/assets/04.jpeg";
import niss1 from "@/assets/niss1.jpeg";
import niss2 from "@/assets/niss2.jpg";
import niss3 from "@/assets/niss3.jpeg";
import niss4 from "@/assets/niss4.jpg";
import niss5 from "@/assets/niss5.jpg";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionText = motion(Text);

const Projects = () => {
  const projectOffer = [
    {
      id: 1,
      img: jaha5,
      title: "Jahi",
      description: "A modern residential complex with innovative design",
      gallery: [
        { id: 1, img: jaha5 },
        { id: 2, img: jaha6 },
        { id: 3, img: jaha3 },
        { id: 4, img: jaha4 },
        { id: 5, img: jaha2 },
        { id: 6, img: jaha1 },
        { id: 7, img: jaha7 },
        { id: 8, img: jaha8 },
      ],
    },
    {
      id: 2,
      img: fm2,
      title: "FMC Project",
      description: "State-of-the-art medical facility design",
      gallery: [
        { id: 1, img: fm1 },
        { id: 2, img: fm2 },
        { id: 3, img: fm3 },
        { id: 4, img: fm4 },
        { id: 5, img: fm5 },
        { id: 6, img: fm6 },
      ],
    },
    {
      id: 3,
      img: mad2,
      title: "DBN Project",
      description: "Commercial complex with sustainable features",
      gallery: [
        { id: 1, img: mad1 },
        { id: 2, img: mad3 },
        { id: 4, img: mad2 },
        { id: 5, img: mad4 },
        { id: 6, img: mad6 },
        { id: 7, img: mad7 },
      ],
    },
    {
      id: 4,
      img: niss2,
      title: "Nisa International Medical Center",
      description: "International standard healthcare facility",
      gallery: [
        { id: 1, img: niss1 },
        { id: 2, img: niss2 },
        { id: 3, img: niss3 },
        { id: 4, img: niss4 },
        { id: 5, img: niss5 },
      ],
    },
  ];

  // Define colors for dark theme
  const bgColor = "gray.900";
  const textColor = "white";
  const accentColor = "#EF7826";
  const glassBg = "rgba(255, 255, 255, 0.1)";

  return (
    <Flex w={"100%"} flexDirection={"column"} bg={bgColor}>
      {/* Hero Section */}
          <Flex
        position="relative"
        w="100%"
        h="100vh"
        overflow="hidden"
        alignItems="center"
        justifyContent="center">
        <Image
          src={build}
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
            Recent Projects
          </Text>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color={textColor}
            maxW="800px"
            mx="auto">
            Discover Our Architectural Excellence
          </Text>
        </MotionBox>
      </Flex>

      {/* Projects Grid */}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        gap={8}
        p={{ base: 4, md: 8, lg: 12 }}>
        {projectOffer.map((item, index) => (
          <Dialog.Root key={item.id} size="cover" placement="center">
              <Dialog.Trigger>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                position="relative"
                borderRadius="2xl"
                overflow="hidden"
                whileHover={{ y: -8 }}
                cursor="pointer">
                <Image
                  src={item.img}
                  w="100%"
                  h="400px"
                  objectFit="cover"
                  filter="brightness(0.7)"
                />
                <Box
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  p={6}
                  bg="linear-gradient(to top, rgba(0,0,0,0.8), transparent)">
                <Text
                    fontSize="xl"
                    fontWeight="bold"
                    color={textColor}
                    mb={2}>
                    {item.title}
                  </Text>
                  <Text color={accentColor} fontSize="sm">
                    {item.description}
                </Text>
                </Box>
              </MotionBox>
              </Dialog.Trigger>
              <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                <Dialog.Content bg={bgColor}>
                  <Dialog.Header p={6} position="relative">
                    <Dialog.Title color={textColor} fontSize="2xl">
                      {item.title}
                      </Dialog.Title>
                      <Dialog.CloseTrigger
                      position="absolute"
                      right={6}
                      top={6}
                        asChild>
                      <CloseButton size="lg" color={textColor} />
                      </Dialog.CloseTrigger>
                    </Dialog.Header>
                    <Dialog.Body>
                    <Carousel
                      withIndicators
                      height={600}
                      styles={{
                        indicator: {
                          background: accentColor,
                        },
                      }}>
                      {item.gallery.map((img) => (
                          <Carousel.Slide key={img.id}>
                            <Image
                              src={img.img}
                            alt={`${item.title} - Image ${img.id}`}
                            w="100%"
                            h="100%"
                            objectFit="contain"
                            />
                          </Carousel.Slide>
                        ))}
                      </Carousel>
                    </Dialog.Body>
                  </Dialog.Content>
                </Dialog.Positioner>
              </Portal>
            </Dialog.Root>
        ))}
      </SimpleGrid>
      <Footer />
    </Flex>
  );
};

export default Projects;
