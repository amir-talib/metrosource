import { Flex, Grid, GridItem, Image, Text, Box, Icon, Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import project1 from "@/assets/project1.svg";
import project2 from "@/assets/project2.svg";
import project3 from "@/assets/project3.svg";
import project4 from "@/assets/project4.svg";
import project5 from "@/assets/project5.svg";
import project6 from "@/assets/project6.svg";
import project7 from "@/assets/project7.svg";
import project8 from "@/assets/project8.svg";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

const images = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
];

const MotionGridItem = motion(GridItem);

const RecentProjects = () => {
  const accentColor = "#EF7826";
  const lightTextColor = "#EAEAEA";
  const darkBg = "#121212";

  const gridItemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <Flex
      w="100%"
      flexDirection="column"
      align="center"
      py={10}
      px={{ base: 4, md: 8, xl: 16 }}
      bg={darkBg}
      color={lightTextColor}
    >
      <Text
        fontSize={{ base: "3xl", md: "5xl" }}
        fontWeight="bold"
        textAlign="center"
        mb={6}
      >
        Recent Projects
      </Text>

      <Text
        color="whiteAlpha.800"
        fontSize={{ base: "lg", md: "xl" }}
        textAlign="center"
        maxW="4xl"
        mb={10}
      >
        Metrosource LTD provides top-tier, all-encompassing services in the
        design and construction industry. Here are some of our featured
        projects:{" "}
        <ChakraLink 
          as={RouterLink} 
          to="/projects"
          color={accentColor} 
          textDecoration="underline"
          _hover={{ color: "orange.300" }}
        >
          Explore more of our work!
        </ChakraLink>
      </Text>

      <Grid
        w="100%"
        maxW="1400px"
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        autoRows="minmax(250px, auto)"
        gap={6}
      >
        {images.map((src, idx) => (
          <MotionGridItem
            key={idx}
            w="100%"
            h="100%"
            position="relative"
            overflow="hidden"
            rounded="xl"
            custom={idx}
            variants={gridItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            whileHover="hover"
          >
            <Image
              src={src}
              alt={`Project ${idx + 1}`}
              w="100%"
              h="100%"
              objectFit="cover"
              transition="transform 0.4s ease-out"
            />
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(18, 18, 18, 0.7)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: 4,
                color: "white",
              }}
              initial={{ opacity: 0 }}
              variants={{
                hover: { 
                  opacity: 1,
                  transition: { duration: 0.3 }
                }
              }}
            >
              <Text fontWeight="bold" fontSize="lg" textAlign="center">
                Project Title {idx + 1}
              </Text>
              <Icon as={FaArrowRight} mt={2} boxSize={6} />
            </motion.div>
          </MotionGridItem>
        ))}
      </Grid>
    </Flex>
  );
};

export default RecentProjects;
