import { Box, Flex, Text, Image, SimpleGrid, Icon } from "@chakra-ui/react";
import Logo from "@/assets/logo.svg?url"; // Use ?url to ensure it loads as URL
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa"; // Correct the LinkedIn icon name
import { NavLink } from "react-router-dom"; // Add back NavLink
import Metro from "@/assets/metro.png?url"; // Add back the Metro image with ?url

// Simplified Footer with more structure
const Footer = () => {
  const accentColor = "#EF7826";
  
  // Re-add menu data array for mapping
  const menu = [
    { name: "Home", hrefLink: "/" },
    { name: "About Us", hrefLink: "/about" },
    { name: "Our Services", hrefLink: "/services" },
    { name: "Recent Projects", hrefLink: "/projects" },
  ];
  
  return (
    <Flex
      width="100%"
      flexDirection="column"
      bg="#121212"
      color="#EAEAEA"
      padding={4}
    >
      {/* Logo Section */}
      <Flex p={4}>
        <Image src={Logo} h="40px" alt="Metro Source Logo" />
      </Flex>
      
      {/* Main Content */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} p={4}>
        {/* Menu Section */}
        <Flex direction="column" gap={4}>
          <Text color={accentColor} fontSize="16px" fontWeight="medium">
            Menu
          </Text>
          <Flex direction="column" gap={2}>
            {/* Replace static text with NavLink mapping */}
            {menu.map((menuItem) => (
              <NavLink 
                key={menuItem.name} 
                to={menuItem.hrefLink}
                style={{ color: "#F1EFE7", fontSize: "14px" }}
              >
                {menuItem.name}
              </NavLink>
            ))}
          </Flex>
        </Flex>
        
        {/* Contact Section */}
        <Flex direction="column" gap={4}>
          <Text color={accentColor} fontSize="16px" fontWeight="medium">
            Get in Touch
          </Text>
          <Flex direction="column" gap={2}>
            <Text color="#F1EFE7" fontSize="14px">Suite 304, Zeto Court, Oshogbo close Area 11 Garki, Abuja.</Text>
            <Text color="#F1EFE7" fontSize="14px">+234 802 356 7392</Text>
            <Text color="#F1EFE7" fontSize="14px">info@metrosourceltd.com</Text>
          </Flex>
        </Flex>
        
        {/* Social Section */}
        <Flex direction="column" gap={4}>
          <Text color={accentColor} fontSize="16px" fontWeight="medium">
            Socials
          </Text>
          <Flex gap={3} alignItems="center">
            <Icon as={FaFacebook} w="20px" h="20px" color="#f4f4f4" cursor="pointer" />
            <Icon as={FaInstagram} w="20px" h="20px" color="#f4f4f4" cursor="pointer" />
            <Icon as={FaLinkedinIn} w="20px" h="20px" color="#f4f4f4" cursor="pointer" />
          </Flex>
        </Flex>
      </SimpleGrid>
      
      {/* Metro image */}
      <Image src={Metro} pos="relative" bottom={[-5, -5, -10]} w="100%" />
      
      {/* Copyright Section */}
      <Flex
        w="100%"
        py={4}
        justifyContent="center"
        alignItems="center"
        bg="#F1EFE7"
        mt={8}
      >
        <Text color="#121212" fontSize="16px">
          © Copyright MetroSource. All Rights Reserved
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
