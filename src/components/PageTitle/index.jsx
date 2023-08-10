import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { LockIcon, BellIcon, UnlockIcon, CheckIcon } from '@chakra-ui/icons';

export default function PageTitle({title}) {
  return (
    <Flex width="80%" height="91%" marginTop="4rem" justifyContent="space-around">
        <Flex backgroundColor="white.100" width="100%" height="80px" borderRadius="15px" marginLeft="35px" marginTop="-40px" alignItems="center">
            <Text marginLeft="20px" fontSize="25px" textColor="#558085" fontWeight="bold">
              {title}
            </Text>
        </Flex>
    </Flex>
  );
}
