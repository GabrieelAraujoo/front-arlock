import React from "react";
import { Flex, Text } from "@chakra-ui/react";

export default function PageTitle({ title, subtitle }) {
  return (
    <Flex
      backgroundColor="white.100"
      width="full"
      minHeight="80px"
      borderRadius="15px"
      alignItems="center"
    >
      <Text
        marginLeft="20px"
        fontSize="25px"
        textColor="#558085"
        fontWeight="bold"
      >
        {title}
        
      </Text>
    </Flex>
  );
}
