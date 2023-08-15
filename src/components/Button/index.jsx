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
      {...rest}
    >
      {title}
    </Button>
  );
}
