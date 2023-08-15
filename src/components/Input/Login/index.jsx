import React from "react";
import { Text, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

export function InputLabelIcon({ label, status, showPassword, ...rest }) {
  return (
    <InputGroup
      display="Flex"
      flexDir="column"
      mt="4%"
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
      <InputRightElement
        mt="20px"
        mr="10px"
        cursor="pointer"
        display="flex"
        justifyContent="center"
        onClick={showPassword}
      >
        {status === true ? (
          <AiFillEyeInvisible color="green.500" />
        ) : (
          <AiFillEye color="green.500" />
        )}
      </InputRightElement>
    </InputGroup>
  );
}
