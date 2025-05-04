import { Button, Flex, Image, List, useBreakpointValue, Text } from "@chakra-ui/react";
import Logo from "@/assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

// Custom hook to track scroll position
const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition(); // Initial call
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const scrollPosition = useScrollPosition(); // Get scroll position

  const toggleActive = () => {
    setActive(!active);
  };

  const menu = [
    { name: "Home", hrefLink: "/" },
    { name: "About Us", hrefLink: "/about" },
    { name: "Our Services", hrefLink: "/services" },
    { name: "Recent Projects", hrefLink: "/projects" },
  ];

  // Determine background based on scroll position
  const navBg = scrollPosition > 50 ? "#121212" : "transparent"; // Transparent when at top
  const navTextColor = "#EAEAEA"; // Light text for dark background
  const accentColor = "#EF7826"; // Existing accent color

  return (
    <Flex
      as="nav"
      w="100%"
      h="80px"
      position="fixed"
      top={0}
      left={0}
      alignItems="center"
      px={{ base: 4, md: 6, lg: 8 }} // Increased padding slightly
      py={{ base: 3, md: 4 }}
      bg={navBg} // Dynamic background
      fontFamily="'Poppins', sans-serif"
      boxShadow={scrollPosition > 50 ? "0px 2px 10px rgba(0, 0, 0, 0.3)" : "none"} // Only show shadow when scrolled and opaque
      zIndex={1000}
      transition="background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out" // Smooth transition
      color={navTextColor} // Set default text color
    >
      {/* Left Side: Logo */}
      <Flex flex="1" alignItems="center">
        <Link to="/">
          <Image src={Logo} h={{ base: "30px", md: "40px" }} />
          {/* Removed commented out text */}
        </Link>
      </Flex>

      {/* Center: Nav Links */}
      <Flex
        as="ul"
        listStyleType="none"
        gap={10} // Increased gap
        alignItems="center"
        display={{ base: "none", lg: "flex" }}
        flex="2"
        justifyContent="center"
      >
        {menu.map((menuItem) => (
          <li key={menuItem.name} className="group">
            <NavLink
              to={menuItem.hrefLink}
              className="relative inline-block pb-1 transition-colors duration-200" // Simplified classes
              style={({ isActive }) => ({
                color: isActive ? accentColor : navTextColor, // Use accent for active, default light for inactive
                fontWeight: isActive ? "600" : "500", // Slightly bolder active
                fontSize: "1.1rem", // Adjusted font size
                opacity: isActive ? 1 : 0.85, // Slightly fade inactive links
                _hover: { // Use Chakra's _hover prop style (applied via className or sx prop ideally, but inline for simplicity here)
                  color: accentColor,
                  opacity: 1,
                }
              })}
            >
              {({ isActive }) => (
                <>
                  <span className="transition-colors duration-200 hover:text-[#EF7826]">
                    {menuItem.name}
                  </span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </Flex>

      {/* Right Side: Get in Touch button + Mobile Icon */}
      <Flex flex="1" justifyContent="flex-end" alignItems="center" gap={4}>
        <Button
          variant="outline" // Outline style
          borderColor={accentColor}
          color={accentColor}
          display={{ base: "none", lg: "flex" }}
          rounded="full"
          px={7}
          // py={2} // Use default padding for outline
          _hover={{ bg: accentColor, color: "#121212" }} // Fill on hover, change text to dark
          fontSize="1.1rem" // Adjusted font size
          fontWeight="500"
          onClick={() => setShowContactModal(true)}
        >
          Get in Touch
        </Button>

        {/* Mobile Menu Toggle */}
        {isMobile && (
          <Button
            onClick={toggleActive}
            bg="transparent"
            color={navTextColor} // Use light color for icon
            p={0}
            minW="auto"
            _hover={{ bg: "transparent", color: accentColor }} // Change color on hover
          >
            {active ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
          </Button>
        )}
      </Flex>

      {/* Mobile Menu Sliding Dropdown */}
      {isMobile && (
        <motion.div
          initial={false}
          animate={active ? "open" : "closed"}
          variants={{
            open: { x: 0 },
            closed: { x: "100%" },
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{
            position: "fixed",
            top: "70px", // Adjust based on new navbar height if changed
            right: 0,
            background: "#181818", // Dark background
            width: "100%",
            height: "calc(100vh - 70px)", // Full height minus navbar
            padding: "2rem 1rem", // Adjusted padding
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            zIndex: 999, // Below navbar
            borderTop: `1px solid ${accentColor}` // Add a top border accent
          }}
        >
          {menu.map((menuItem) => (
            <NavLink
              key={menuItem.name}
              to={menuItem.hrefLink}
              onClick={() => setActive(false)}
              style={({ isActive }) => ({
                position: "relative",
                textDecoration: "none",
                color: isActive ? accentColor : navTextColor, // Consistent colors
                fontWeight: isActive ? "bold" : "500",
                fontSize: "1.3rem", // Slightly larger for mobile tap targets
                padding: "10px 0",
                textAlign: "center",
                opacity: isActive ? 1 : 0.9,
                borderBottom: `1px solid ${isActive ? accentColor : 'rgba(255, 255, 255, 0.1)'}` // Subtle separator
              })}
            >
              {({ isActive }) => (
                <>
                  {menuItem.name}
                </>
              )}
            </NavLink>
          ))}
          {/* Optionally add the 'Get in Touch' button here too */}
          <Button
            mt={6} // Add some margin top
            variant="solid" // Solid style for mobile
            bg={accentColor}
            color={"#121212"} // Dark text on accent bg
            rounded="full"
            px={8}
            py={6} // Larger touch target
            _hover={{ bg: "#d66a1f" }} // Darken accent on hover
            fontSize="1.2rem"
            onClick={() => setActive(false)} // Close menu on click
            as={Link} // Make it a Link if it navigates
            to="/contact" // Example link, adjust as needed
          >
            Get in Touch
          </Button>
        </motion.div>
      )}

      {/* Custom Get in Touch Modal */}
      {showContactModal && (
        <div style={{
          position: "fixed",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "rgba(0,0,0,0.55)",
          zIndex: 2000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <div style={{
            background: "#181818",
            borderRadius: "1.5rem",
            padding: "2.5rem 2rem",
            minWidth: 320,
            boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative"
          }}>
            <button
              onClick={() => setShowContactModal(false)}
              style={{
                position: "absolute",
                top: 18, right: 18,
                background: "none",
                border: "none",
                color: "#fff",
                fontSize: 24,
                cursor: "pointer"
              }}
              aria-label="Close"
            >×</button>
            <h2 style={{ color: "#EF7826", marginBottom: 24, fontWeight: 700, fontSize: "1.5rem" }}>Get in Touch</h2>
            <a
              href="tel:+2349120245727"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                background: "#232323",
                color: "#fff",
                borderRadius: "1rem",
                padding: "1rem 2rem",
                marginBottom: 18,
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "1.1rem",
                transition: "background 0.2s"
              }}
              onMouseOver={e => e.currentTarget.style.background = "#EF7826"}
              onMouseOut={e => e.currentTarget.style.background = "#232323"}
            >
              <span style={{ fontSize: 22, display: "flex" }}>📞</span>
              Call +234 912 024 5727
            </a>
            <a
              href="https://wa.me/2349120245727"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                background: "#232323",
                color: "#fff",
                borderRadius: "1rem",
                padding: "1rem 2rem",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "1.1rem",
                transition: "background 0.2s"
              }}
              onMouseOver={e => e.currentTarget.style.background = "#25D366"}
              onMouseOut={e => e.currentTarget.style.background = "#232323"}
            >
              <span style={{ fontSize: 22, display: "flex" }}>🟢</span>
              WhatsApp Chat
            </a>
          </div>
        </div>
      )}
    </Flex>
  );
};

export default Navbar;
