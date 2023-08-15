import React from "react";
import { Flex, Text } from "@chakra-ui/react";

export function BoxInformation({ title, subtitle }) {
  return (
    <Flex
      bgColor="gray.200"
      padding="10px"
      width="590px"
      height="70px"
      marginLeft="1.3rem"
      marginTop="1.4rem"
      borderRadius="12px"
      direction="column"
      border="1px"
      borderColor="gray.300"
    >
      <Text fontSize="11px" marginTop="2px">
        {" "}
        {title}{" "}
      </Text>
      <Text marginTop="2px"> {subtitle} </Text>
    </Flex>
  );
}
