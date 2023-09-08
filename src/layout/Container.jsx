import React from "react";
import { Flex, useBreakpointValue } from "@chakra-ui/react";
import MenuLateral from "../components/Menu/MenuLateral";

export function Container({ children, ...rest }) {
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
      {variant === true && <MenuLateral />}
      {children}
    </Flex>
  );
}

export function ContainerLogOff({ children, ...rest }) {
  return (
    <Flex
      bgGradient="linear(to-t,  #020024, #00D4FF)"
      w="full"
      h="auto"
      {...rest}
    >
      {children}
    </Flex>
  );
}
