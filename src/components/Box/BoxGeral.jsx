import React from "react";
import { Flex, Text } from "@chakra-ui/react";

export function BoxGeral({ number, text, ...rest }) {
  return (
    <Flex
      backgroundColor="#BFDDE0"     
      height="130px"
      borderRadius="15px"
      width="full"
      {...rest}
    >
      <Flex marginLeft="20px" marginTop="10px" direction="column">
        <Text fontSize="3rem" textColor="#558085" fontWeight="bold">
          {number}
        </Text>

        <Text textColor="#558085" fontWeight="bold" fontSize="1rem">
          {text}
        </Text>
      </Flex>
    </Flex>
  );
}
