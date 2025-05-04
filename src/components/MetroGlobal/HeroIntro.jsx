/* eslint-disable react/prop-types */
import { Flex, Image, Text } from "@chakra-ui/react";

export default function HeroIntro({ img, text }) {
  return (
    <Flex
      w={"100%"}
      height={{ smDown: "50vh", smToLg: "60vh", lgTo2xl: "80vh" }}
      pos={"relative"}
      p={4}>
      <Image
        src={img}
        fit={"cover"}
        width={"100%"}
        filter={"brightness(0.5)"}
        height={"100%"}
        rounded={"2xl"}
      />
      <Text
        pos={"absolute"}
        top={"35%"}
        left={0}
        right={0}
        bottom={0}
        color={"#f4f4f4"}
        textAlign={"center"}
        fontSize={[40, 40, 60, 80]}
        fontWeight={"medium"}>
        {text}
      </Text>
    </Flex>
  );
}
