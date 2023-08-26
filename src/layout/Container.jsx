import React from "react";
import { Flex, useBreakpointValue } from "@chakra-ui/react";
import MenuLateral from "../components/Menu/MenuLateral";
import { useLocation } from "react-router-dom";

export function Container({ children, ...rest }) {
  const { pathname } = useLocation();
  const variant = useBreakpointValue({
    base: false,
    md: false,
    lg: true,
  });

  return (
    <Flex
      bgGradient="linear(to-t,  #020024, #00D4FF)"
      w="full"
      h="auto"
      {...rest}
    >
      {pathname !== "/" && pathname !== "/cadastro" && pathname !== "/esqueceusenha" && variant === true && <MenuLateral />}
      {children}
    </Flex>
  );
}
