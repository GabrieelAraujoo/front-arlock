import React from "react";
import { Text, Select, InputGroup } from "@chakra-ui/react";

export default function SelectLabel({
  label,
  ml,
  placeholder,
  options,
  ...rest
}) {
  return (
    <InputGroup
      display="Flex"
      flexDir="column"
      mt="1rem"
      p="10px"
      marginLeft={ml}
      color="black"
      borderRadius="12px"
      border="1px solid #EDE7F6"
      boxShadow=" 0 2px 5px rgb(0, 0, 0, .5);"
      _hover={{ border: "1px solid", borderColor: "#558085" }}
    >
      <Text textStyle="Bold" fontSize="0.7rem" pl="3%" color="gray.500">
        {label}
      </Text>
      <Select
        w="100%"
        h="30px"
        borderColor="none"
        border="none"
        _focusVisible={{ border: "none" }}
        _focus={{ border: "none" }}
        placeholder={placeholder}
        {...rest}
      >
        {options.map((item) => {
          return (
            <option key={item.id} value={item.name}>
              {item.nome}
            </option>
          );
        })}
      </Select>
    </InputGroup>
  );
}
