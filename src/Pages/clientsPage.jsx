import { useState, useCallback, useEffect } from "react";
import { PrevButton, NextButton } from "@/components/MetroGlobal/EmblaBTN";
import EmblaCarousel from "@/components/MetroGlobal/Slide";
import { Button, Flex, Text } from "@chakra-ui/react";
import { IoChatbubbleOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const MotionFlex = motion(Flex);
const MotionText = motion(Text);

const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

const ClientPage = () => {
  const OPTIONS = { align: "start" };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  const [embla, setEmbla] = useState(null);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(embla);


  return (
    <MotionFlex
      w="full"
      bg="#f4f4f4"
      py={16}
      px={{ base: 4, md: 6, xl: 8 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      justify="center"
    >
      <MotionFlex
        w="full"
        flexDir="column"
        gap={10}
        bg="#121212"
        p={{ base: 4, md: 8, xl: 10 }}
        rounded="2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <Flex w="full" justifyContent="space-between" alignItems="center" flexWrap="wrap">
          <MotionText
            color="#f4f4f4"
            fontSize={["2xl", "2xl", "3xl", "4xl"]}
            fontWeight="medium"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            What our clients say
          </MotionText>
          <Flex gap={2} mt={[2, 2, 0]}>
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </Flex>
        </Flex>

        <Flex w="full">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} setEmbla={setEmbla} />
        </Flex>

        <MotionFlex
          w="full"
          gap={6}
          direction={{ base: "column", md: "row" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Flex w="full" gap={4} align="center">
            <Flex
              bg="#EF7826"
              w={12}
              h={12}
              justify="center"
              align="center"
              rounded="xl"
              flexShrink={0}
            >
              <IoChatbubbleOutline size={20} color="#fff" />
            </Flex>
            <Flex direction="column">
              <Text fontSize={["md", "lg"]} fontWeight="medium" color="white">
                Let’s Build Something Amazing Together
              </Text>
              <Text fontSize={["xs", "sm"]} color="#f4f4f4a0">
                Share your project details with us, and we’ll take it from there.
              </Text>
            </Flex>
          </Flex>

          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 200 }}>
            <Button
              bg="white"
              color="#EF7826"
              px={6}
              py={6}
              rounded="md"
              fontWeight="medium"
            >
              Get in Touch
            </Button>
          </motion.div>
        </MotionFlex>
      </MotionFlex>
    </MotionFlex>
  );
};

export default ClientPage;
