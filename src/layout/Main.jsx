import React from "react";
import { Flex } from "@chakra-ui/react";

export function Main({ children, ...rest }) {
  return (
    <Flex w="full" minH="100vh" justify="center">
      <Flex maxW="1550px" w="full" {...rest}>
        {children}
      </Flex>
    </Flex>
  );
}
