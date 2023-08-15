import React from "react";
import { Text, Input, InputGroup } from "@chakra-ui/react";

export function InputLabel({ label, marginLeft, ...rest }) {
  return (
    <InputGroup
      display="Flex"
      flexDir="column"
      marginLeft={marginLeft}
      mt="1rem"
      p="10px"
      color="black"
      borderRadius="12px"
      border="1px solid #EDE7F6"
      boxShadow=" 0 2px 5px rgb(0, 0, 0, .5);"
      _hover={{ border: "1px solid", borderColor: "#558085" }}
    >
      <Text textStyle="Bold" fontSize="0.7rem" pl="3%" color="gray.500">
        {label}
      </Text>
      <Input
        w="100%"
        h="30px"
        borderRadius="12px"
        borderColor="none"
        fontSize="16px"
        border="none"
        fontWeight="bold"
        color="#000"
        _focusVisible={{ border: "none" }}
        _focus={{ border: "none" }}
        {...rest}
      />
    </InputGroup>
  );
}
