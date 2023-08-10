import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { LockIcon, BellIcon, UnlockIcon, CheckIcon } from "@chakra-ui/icons";

export default function PageTitle({ title }) {
  return (
    <Flex
      backgroundColor="white.100"
      width="full"
      height="80px"
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
