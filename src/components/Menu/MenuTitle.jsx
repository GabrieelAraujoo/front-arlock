import React from "react";
import { Flex, Text } from "@chakra-ui/react";

export function MenuTitle({ title, ...rest }) {
  return (
    <Flex
      backgroundColor="white.100"
      width="90%"
      paddingLeft="10px"
      textColor="#558085"
      alignItems="center"
      fontSize="25px"
      fontWeight="bold"
      marginBottom="1rem"
      {...rest}
    >
      <Text>{title}</Text>
    </Flex>
  );
}

export function MenuSubtitle({ subtitle, ...rest }) {
  return (
    <Flex
      backgroundColor="white.100"
      width="80%"
      paddingLeft="10px"
      textColor="#558085"
      alignItems="center"
      marginBottom="1.5rem"
      {...rest}
    >
      <Text> {subtitle} </Text>
    </Flex>
  );
}
