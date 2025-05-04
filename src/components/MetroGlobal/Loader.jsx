import { Flex, Image, Text } from "@chakra-ui/react";
import Logo from "@/assets/logo.svg";
function Loader() {
  return (
    <Flex
      w={"100%"}
      height={"100vh"}
      bg={"#f4f4f4"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}>
      <Image src={Logo} w={200} h={100} />
      <Text fontSize={25} color='#e05b16'>
        Loading...
      </Text>
    </Flex>
  );
}

export default Loader;
