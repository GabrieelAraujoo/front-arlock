import React from "react";
import { Button } from "@chakra-ui/react";

export function ButtonExit({ title, ...rest }) {
  return (
    <Button
      w="full"
      colorScheme="teal"
      variant="outline"
      height="45px"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-r, #558085, #A3CCB8)"
      _hover={{ color: "#9FC7B4", bgGradient: "linear(to-r, #45676B, #81A191)" }}
      textColor="white"
      {...rest}
    >
      {title}
    </Button>
  );
}
