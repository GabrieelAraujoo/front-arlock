import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";
import MenuLateral from "../components/Menu/MenuLateral";
import { useLocation } from "react-router-dom";

export function Container({ children, ...rest }) {
  const { pathname } = useLocation();

  return (
    <Flex
      bgGradient="linear(to-t,  #020024, #00D4FF)"
      w="full"
      h="auto"
      {...rest}
    >
      {pathname !== "/" && <MenuLateral />}
      {children}
    </Flex>
  );
}
