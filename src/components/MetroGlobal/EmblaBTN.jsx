/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { Button } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const PrevButton = ({ onClick, disabled }) => (
  <Button
    aria-label="Previous slide"
    onClick={onClick}
    isDisabled={disabled}
    size="xl"
    bg="#EF7826"
    borderRadius="full"
    boxShadow="md"
    _hover={{ bg: "#d7671e" }}
    _disabled={{ opacity: 0.5, cursor: "not-allowed" }}
  >
    <FaArrowLeft size={14} color='#ffffff' />
  </Button>
);

export const NextButton = ({ onClick, disabled }) => (
  <Button
    aria-label="Next slide"
    onClick={onClick}
    isDisabled={disabled}
    size="xl"
    bg="#EF7826"
    borderRadius="full"
    boxShadow="md"
    _hover={{ bg: "#d7671e" }}
    _disabled={{ opacity: 0.5, cursor: "not-allowed" }}
  >
    <FaArrowRight size={14} color='#ffffff' />
  </Button>
);
