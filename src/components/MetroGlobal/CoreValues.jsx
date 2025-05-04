import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  VStack,
  Circle,
  useBreakpointValue,
  Image
} from "@chakra-ui/react";
import Logo from "@/assets/logo.svg";
import { motion } from "framer-motion";
// import LeaderLine from "leader-line-new"; // Removing leader-line dependency

const MotionBox = motion(Box);
const MotionCircle = motion(Circle);
const MotionText = motion(Text);

const values = [
  {
    title: "Professionalism",
    description:
      "We possess the competence and skill expected of professionals expected to deliver on projects effectively.",
  },
  {
    title: "Integrity",
    description: "We value honesty and transparency in all our dealings.",
  },
  {
    title: "Innovation",
    description:
      "We constantly push boundaries and seek better, smarter solutions.",
  },
  {
    title: "Collaboration",
    description: "We work together to achieve shared goals effectively.",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

// SVG path animation for connecting values
const pathVariant = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: { 
      duration: 5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop"
    }
  }
};

const CoreValues = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const accentColor = "#EF7826";
  const sectionRef = useRef(null);
  const logoRef = useRef(null);
  const valueRefs = useRef([]);
  const [isVisible, setIsVisible] = useState(false);
  const [svgPath, setSvgPath] = useState(""); // Path for the connecting line
  const cardContainerRef = useRef(null); // Ref for the Flex container holding cards

  valueRefs.current = values.map((_, i) => valueRefs.current[i] ?? React.createRef());

  // Effect for Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Calculate the SVG path once all elements are rendered
  useEffect(() => {
    if (isMobile || !logoRef.current || valueRefs.current.some(ref => !ref.current)) {
      return;
    }

    // Function to calculate position relative to the section
    const getRelativePosition = (element, target = 'center') => {
      if (!element || !sectionRef.current) return { x: 0, y: 0 };
      
      const rect = element.getBoundingClientRect();
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const relativeTop = rect.top - sectionRect.top;
      const relativeLeft = rect.left - sectionRect.left;

      switch (target) {
        case 'top': return { x: relativeLeft + rect.width / 2, y: relativeTop };
        case 'bottom': return { x: relativeLeft + rect.width / 2, y: relativeTop + rect.height };
        case 'left': return { x: relativeLeft, y: relativeTop + rect.height / 2 };
        case 'right': return { x: relativeLeft + rect.width, y: relativeTop + rect.height / 2 };
        default: // center
          return {
            x: relativeLeft + rect.width / 2,
            y: relativeTop + rect.height / 2
          };
      }
    };

    // Wait for a moment to ensure all elements are positioned
    const timer = setTimeout(() => {
      const logoCenter = getRelativePosition(logoRef.current);

      // Assuming card order based on the 'values' array: 0: Prof, 1: Int, 2: Innov, 3: Collab
      // Check if all refs are available before accessing .current
      if (valueRefs.current.length < 4 || valueRefs.current.some(ref => !ref.current)) {
        console.warn("Not all card refs are available for path calculation.");
        return;
      }

      const profPos = {
        center: getRelativePosition(valueRefs.current[0].current, 'center'),
        top: getRelativePosition(valueRefs.current[0].current, 'top'),
        left: getRelativePosition(valueRefs.current[0].current, 'left')
      };
      const intPos = {
        center: getRelativePosition(valueRefs.current[1].current, 'center'),
        top: getRelativePosition(valueRefs.current[1].current, 'top'),
        right: getRelativePosition(valueRefs.current[1].current, 'right')
      };
       const innovPos = { // Assuming index 2 is Innovation (bottom-left)
         center: getRelativePosition(valueRefs.current[2].current, 'center'),
         bottom: getRelativePosition(valueRefs.current[2].current, 'bottom'),
         left: getRelativePosition(valueRefs.current[2].current, 'left')
       };
       const collabPos = { // Assuming index 3 is Collaboration (bottom-right)
         center: getRelativePosition(valueRefs.current[3].current, 'center'),
         bottom: getRelativePosition(valueRefs.current[3].current, 'bottom'),
         right: getRelativePosition(valueRefs.current[3].current, 'right')
       };

      // Calculate midpoints between cards with some padding
      const padding = 20;
      const topMid = { x: (profPos.center.x + intPos.center.x) / 2, y: Math.min(profPos.top.y, intPos.top.y) - padding };
      const rightMid = { x: Math.max(intPos.right.x, collabPos.right.x) + padding, y: (intPos.center.y + collabPos.center.y) / 2 };
      const bottomMid = { x: (innovPos.center.x + collabPos.center.x) / 2, y: Math.max(innovPos.bottom.y, collabPos.bottom.y) + padding };
      const leftMid = { x: Math.min(profPos.left.x, innovPos.left.x) - padding, y: (profPos.center.y + innovPos.center.y) / 2 };

      // Create the specific path using quadratic curves
      let path = `M ${logoCenter.x} ${logoCenter.y}`; // Start at logo
      path += ` Q ${logoCenter.x} ${topMid.y}, ${topMid.x} ${topMid.y}`;         // Curve up to top midpoint
      path += ` Q ${rightMid.x} ${topMid.y}, ${rightMid.x} ${rightMid.y}`;       // Curve right to right midpoint
      path += ` Q ${rightMid.x} ${bottomMid.y}, ${bottomMid.x} ${bottomMid.y}`; // Curve down to bottom midpoint
      path += ` Q ${leftMid.x} ${bottomMid.y}, ${leftMid.x} ${leftMid.y}`;       // Curve left to left midpoint
      path += ` Q ${leftMid.x} ${topMid.y}, ${logoCenter.x} ${logoCenter.y}`; // Curve back towards logo (adjust control point as needed)
      path += ` Z`;                                                             // Close path

      setSvgPath(path);
    }, 500);

    return () => clearTimeout(timer);
  }, [isMobile, isVisible]);

  return (
    <Box ref={sectionRef} bg="#121212" py={16} px={[4, 8]} minH="auto" position="relative" overflow="hidden">
      {/* Heading */}
      <Flex direction="column" align="center" justify="center" mb={6}>
        <MotionText
          fontSize={["2xl", "3xl", "4xl"]}
          fontWeight="bold"
          color="white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Core Values
        </MotionText>
      </Flex>

      <Box position="relative" w="full" maxW="6xl" mx="auto">
        {/* SVG For Path Animation */}
        {!isMobile && svgPath && (
          <Box
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            zIndex={1}
            pointerEvents="none"
          >
            <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
              <motion.path
                d={svgPath}
                stroke={accentColor}
                strokeWidth={2}
                fill="none"
                strokeLinecap="round"
                strokeDasharray="50 2000" // A dash length of 50, with a huge gap to make it loop
                variants={{ // Animate the dash offset instead of pathLength
                  hidden: { strokeDashoffset: 2050 }, // Start offset (total length + dash length)
                  visible: {
                    strokeDashoffset: 0, // End offset
                    transition: {
                      duration: 8, // Adjust duration for speed
                      ease: "linear", // Use linear for constant speed
                      repeat: Infinity,
                    }
                  }
                }}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                style={{ filter: 'drop-shadow(0 0 3px rgba(239, 120, 38, 0.6))' }}
              />
            </svg>
          </Box>
        )}

        {/* Central Logo */}
        <MotionCircle
          ref={logoRef}
          size={20}
          mx="auto"
          zIndex={2}
          position="relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image src={Logo} h={{ base: "30px", md: "40px" }} />
        </MotionCircle>

        {/* Cards */}
        <Flex
          ref={cardContainerRef}
          direction={isMobile ? "column" : "row"}
          wrap="wrap"
          justify="center"
          mt={12}
          gap={6}
        >
          {values.map((val, index) => (
            <MotionBox
              key={index}
              custom={index}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              bg="#1a1a1a"
              p={5}
              rounded="lg"
              w={{ base: "100%", sm: "80%", md: "45%", lg: "40%" }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              color="white"
              borderLeft={`4px solid ${accentColor}`}
              ref={valueRefs.current[index]}
              zIndex={3} // Higher than the SVG path
              position="relative" // Needed for proper z-index
              boxShadow="0 4px 20px rgba(0,0,0,0.3)" // Add shadow for depth
            >
              <Text fontWeight="bold" fontSize="xl" mb={2}>
                {val.title}
              </Text>
              <Text fontSize="lg" color="gray.300">
                {val.description}
              </Text>
            </MotionBox>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default CoreValues;
