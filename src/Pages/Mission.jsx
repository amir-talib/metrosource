import { Flex, Heading, Text, Icon, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
// import m1 from "@/assets/m1.png"; // Remove old images
// import m2 from "@/assets/m2.png";
import { FaBullseye, FaEye } from "react-icons/fa6"; // Example icons

const MotionFlex = motion(Flex);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

export default function Mission() {
  const accentColor = "#EF7826";
  const lightTextColor = "#EAEAEA";
  const mutedTextColor = "rgba(234, 234, 234, 0.7)";

  const sectionVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger animation of children
        delayChildren: 0.2,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <MotionFlex
      width="full"
      // minH="100vh"
      py={20} // Adjusted padding
      px={{ base: 4, md: 8, lg: 16 }}
      // gap={[8, 12, 16]}
      // flexWrap="wrap"
      flexDirection="column" // Stack title and grid
      justifyContent="center"
      alignItems="center"
      // bg="#f4f4f4"
      bg="#181818" // Dark background, slightly different from #121212 for contrast
      color={lightTextColor}
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Optional Section Title */}
      {/* <MotionHeading ... >Mission & Vision</MotionHeading> */}

      <SimpleGrid 
        columns={{ base: 1, md: 2 }} // 1 column on mobile, 2 on larger screens
        spacing={{ base: 10, md: 16 }} // Spacing between columns
        w="full"
        maxW="1200px" // Limit width
      >
        {/* Mission Column */}
        <MotionFlex 
          direction="column" 
          alignItems={{ base: "center", md: "flex-start" }}
          textAlign={{ base: "center", md: "left" }}
          variants={itemVariant}
        >
          <Icon as={FaBullseye} boxSize={12} color={accentColor} mb={4} />
          <Heading as="h3" size="xl" mb={4}>
            Our Mission
          </Heading>
          <Text fontSize="lg" color={mutedTextColor}>
            To redefine architectural excellence through innovative design, sustainable practices, and unwavering commitment to client satisfaction, creating spaces that inspire and endure for generations.
          </Text>
        </MotionFlex>

        {/* Vision Column */}
        <MotionFlex 
          direction="column" 
          alignItems={{ base: "center", md: "flex-start" }}
          textAlign={{ base: "center", md: "left" }}
          variants={itemVariant}
        >
          <Icon as={FaEye} boxSize={12} color={accentColor} mb={4} />
          <Heading as="h3" size="xl" mb={4}>
            Our Vision
          </Heading>
          <Text fontSize="lg" color={mutedTextColor}>
            To be the leading architectural firm recognized globally for shaping a future where design harmonizes seamlessly with humanity and the environment, setting new standards for creativity and impact.
          </Text>
        </MotionFlex>
      </SimpleGrid>

      {/* Remove old image mapping */}
      {/* {vision.map((item) => ( ... ))} */}
    </MotionFlex>
  );
}