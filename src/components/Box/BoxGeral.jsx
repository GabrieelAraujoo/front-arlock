import React from "react";
import { Flex, Text } from "@chakra-ui/react";

export function BoxGeral({ number, text }) {
  return (
    <Flex
      backgroundColor="#BFDDE0"
      minWidth={{ base: "full", lg: "410px" }}
      height="130px"
      borderRadius="15px"
    >
      <Flex marginLeft="20px" marginTop="10px" direction="column">
        <Text fontSize="48px" textColor="#558085" fontWeight="bold">
          {number}
        </Text>

        <Text textColor="#558085" fontWeight="bold" fontSize="1rem">
          {text}
        </Text>
      </Flex>
    </Flex>
  );
}
