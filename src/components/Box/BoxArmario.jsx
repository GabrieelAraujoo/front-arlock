import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";

export function BoxArmario({ armario }) {
  return (
    <Flex
      width="130px"
      height="186px"
      background="#bfdde0"
      borderRadius="12px"
      direction="column"
      alignItems="center"
      justifyContent="space-around"
    >
      <Flex width="full" direction="column" alignItems="center">
        <Box
          width="70%"
          height="8px"
          background="#558085"
          borderRadius="10px"
          marginBottom=".4rem"
        />
        <Box
          width="70%"
          height="8px"
          background="#558085"
          borderRadius="10px"
          marginBottom=".4rem"
        />
        <Box
          width="70%"
          height="8px"
          background="#558085"
          borderRadius="10px"
        />
      </Flex>

      <Flex width="full" marginLeft="2.2rem">
        <Flex
          width="20px"
          height="20px"
          background="#558085"
          borderRadius="50%"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            width="10px"
            height="10px"
            borderRadius="50%"
            background="#D9D9D9"
          />
        </Flex>
      </Flex>

      <Text textColor="#558085" fontSize="13px">
        Armário {armario.letra} {armario.numero}
      </Text>
    </Flex>
  );
}
