import Footer from "@/components/MetroGlobal/Footer";
// import Navbar from "@/components/MetroGlobal/Navbar"; // Removed redundant Navbar
import ClientPage from "@/Pages/clientsPage";
// import CoreValues from "@/components/M/CoreValues";
import CoreValues from "@/components/MetroGlobal/CoreValues";
import Home from "@/Pages/Home";
import Mission from "@/Pages/Mission";
import RecentProjects from "@/Pages/RecentProjects";
import Services from "@/Pages/Services";
import { Flex } from "@chakra-ui/react";

// Renamed from HeroSection to HomePage
const HomePage = () => {
  return (
    <Flex flex={1} w={"full"} flexDirection={"column"} /* Removed bg color, handled by sections or global */>
      {/* Navbar is now handled by Layout component */}
      <Home />      {/* This will be the redesigned Hero area */}
      <Services />
      <ClientPage />
      <CoreValues />
      <Mission />
      <RecentProjects />
      <Footer />
    </Flex>
  );
};

export default HomePage; // Renamed export
