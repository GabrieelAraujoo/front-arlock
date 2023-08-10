import React from "react";
import { Flex } from "@chakra-ui/react";
import MenuLateral from "../components/Menu/MenuLateral";

export function Container({ children, ...rest }) {
  return (
    <Flex
      bgGradient="linear(to-t,  #020024, #00D4FF)"
      w="full"
      h="auto"
      align="center"
      {...rest}
    >
      <MenuLateral />
      {children}
    </Flex>
  );
}
