import {
  Box,
  Button,
  CloseButton,
  Dialog,
  Flex,
  Image,
  List,
  Portal,
  Text,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaHelmetSafety, FaArrowRight } from "react-icons/fa6";
import { FaPencilRuler } from "react-icons/fa";
import service2 from "@/assets/service2.png";
import service3 from "@/assets/service3.png";
import { useNavigate } from "react-router-dom";

const MotionBox = motion.create(Box);

const dialogVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 20
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 300
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: {
      duration: 0.2
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const GOLDEN_RATIO = 1.618;
const goldenGap = 48; // px, can be tuned for your design
const goldenPadding = Math.round(goldenGap * GOLDEN_RATIO); // ≈78px

const Services = () => {
  const navigate = useNavigate();
  const serviceOffer = [
    {
      id: 1,
      icon: <FaPencilRuler size={24} color='#121212' />,
      img: service3,
      title: "Architectural and engineering consultancy services",
      subService: [
        "PROJECT PLANNING AND DESIGN",
        "URBAN DESIGN AND LANDSCAPE",
        "INTERIOR DESIGN",
        "BUILDING TRANSFORMATION AND ADAPTIVE REUSE",
        "PROJECT MANAGEMENT",
      ],
      subTitle:
        "We specialize in providing innovative and high-quality architectural designs for your construction projects. Our team of experienced architects and designers are dedicated to delivering exceptional services that meet and exceed our clients' expectations.",
    },
    {
      id: 2,
      icon: <FaHelmetSafety size={24} color='#121212' />,
      img: service2,
      title: "Engineering Services",
      subService: [
        "BUILDING CONSTRUCTION AND ENGINEERING",
        "STRUCTURAL ENGINEERING",
        "MEP ENGINEERING",
        "CIVIL ENGINEERING",
        "PROJECT MANAGEMENT",
        "PROJECT MONITORING AND EVALUATION",
        "ENVIRONMENTAL IMPACT ANALYSIS",
      ],
      subTitle:
        "Our skilled engineers provide diverse services, prioritizing quality construction with specialized solutions. Using renowned 'Green technology,' we ensure safe, efficient, and cost-effective outcomes.",
    },
  ];

  const [openDialogs, setOpenDialogs] = useState({});
  const MotionDialogContent = motion.create(Dialog.Content);

  const handleDialogChange = (id, open) => {
    setOpenDialogs(prev => ({
      ...prev,
      [id]: open
    }));
  };

  return (
    <Box position="relative" w="full" py={goldenPadding} px={{ base: 4, md: goldenPadding }} bg="#121212" color="#EAEAEA" overflow="hidden">
      {/* Animated Orb Background */}
      <motion.div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          width: 500,
          height: 500,
          zIndex: 0,
          pointerEvents: "none",
          filter: "blur(80px)",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle at 60% 40%, #ef7826 0%, #121212 80%)",
          opacity: 0.18,
        }}
        animate={{
          scale: [1, 1.08, 1],
          rotate: [0, 10, -10, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <Text
        fontSize={{ base: "2xl", md: "4xl" }}
        fontWeight="bold"
        textAlign="center"
        mb={4}
        zIndex={2}
        position="relative"
      >
        Our Services
      </Text>
      <Text
        fontSize={{ base: "lg", md: "xl" }}
        textAlign="center"
        maxW="3xl"
        mx="auto"
        color="whiteAlpha.800"
        mb={10}
        zIndex={2}
        position="relative"
      >
        Metrosource LTD operates with the highest standards of professionalism,
        delivering a wide range of comprehensive services designed to meet
        diverse client needs effectively.
      </Text>

      <Flex
        gap={{ base: goldenGap, md: goldenGap }}
        justifyContent="center"
        alignItems="stretch"
        direction={{ base: "column", md: "row" }}
        zIndex={2}
        position="relative"
      >
        {/* Both cards same size, maxW for desktop harmony */}
        {serviceOffer.map((item, index) => (
          <MotionBox
            key={item.id}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            w={{ base: "100%", md: "420px" }}
            maxW="100%"
            minW={0}
            bg="rgba(30,30,30,0.7)"
            boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.18)"
            borderRadius="2xl"
            border="1.5px solid rgba(239,120,38,0.18)"
            backdropFilter="blur(8px)"
            overflow="hidden"
            position="relative"
            _hover={{
              borderColor: "#EF7826",
              boxShadow: "0 0 30px 0 #ef7826a0",
              transform: "scale(1.025)",
              transition: "all 0.3s cubic-bezier(.4,2,.6,1)",
            }}
            transition="all 0.3s cubic-bezier(.4,2,.6,1)"
            display="flex"
            flexDirection="column"
          >
            <Box position="relative">
              <Image src={item.img} alt={item.title} w="full" h="220px" objectFit="cover" />
                    <Button
                position="absolute"
                bottom={4}
                right={4}
                px={6}
                      py={2}
                      bg="#ef7826"
                      color="white"
                size="md"
                      rounded="full"
                fontWeight="bold"
                _hover={{
                  bg: "#fff",
                  color: "#ef7826",
                  boxShadow: "0 0 0 4px #ef7826a0",
                  transform: "scale(1.08)"
                }}
                zIndex={2}
                onClick={() => {
                  if (item.id === 2) { // ID 2 is Engineering
                    navigate("/services#engineering");
                  } else { // ID 1 is Architecture, navigate to top
                    navigate("/services");
                  }
                }}
                    >
                      Learn More
                    </Button>
            </Box>
            <Box p={6} flex={1} display="flex" flexDirection="column">
              <Box mb={2}>{item.icon}</Box>
              <Text fontSize="xl" fontWeight="semibold" mb={2} color="#fff">
                {item.title}
              </Text>
              <Text fontSize="md" color="gray.300" flex={1}>
                {item.subTitle}
              </Text>
            </Box>
          </MotionBox>
        ))}
      </Flex>
    </Box>
  );
};

export default Services;
