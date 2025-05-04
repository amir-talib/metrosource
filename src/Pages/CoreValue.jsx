import { Flex, Image } from "@chakra-ui/react";
import core1 from "@/assets/CoreValue1.png";
const CoreValues = () => {
  return (
    <Flex w={"100%"}>
      <Image
        src={core1}
        w={"100%"}
        height={"full"}
        fit={["contain", "contain", "cover", "cover"]}
      />
    </Flex>
  );
};

export default CoreValues;
