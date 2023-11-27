import React from "react";
import { Input, InputGroup, InputLeftElement, Icon } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export function InputPesquisa({ placeholder, ...rest }) {
  return (
    <InputGroup
      w={{ base: "150px", lg: "25%" }}
      h="45px"
      my="1rem"
      {...rest}
      id="input-busca"
    >
      <InputLeftElement
        children={<Icon as={SearchIcon} />}
        h="full"
        cursor="pointer"
      />
      <Input
        h="full"
        placeholder={placeholder}
        border="1px solid"
        borderColor="gray.500"
        bgColor="white.100"
      />
    </InputGroup>
  );
}
