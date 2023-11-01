import React from "react";
import { Button } from "@chakra-ui/react";
import { color } from "framer-motion";

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
      _hover={{ color: "#8DB09F"}}
      _focus={"linear(to-r, #486C70, #8DB09F)"}
      textColor="white"
      {...rest}
    >
      {title}
    </Button>
  );
}
