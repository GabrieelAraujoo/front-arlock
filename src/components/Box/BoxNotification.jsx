import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { LockIcon, BellIcon, UnlockIcon, CheckIcon } from '@chakra-ui/icons';

export function BoxNotificationAlert({title, subtitle}) {
  return (
    <Flex backgroundColor="#BFDDE0" marginInline="20px" marginTop="35px"  height="100px" borderRadius="12px" alignItems="center">
        <BellIcon height="25px" width="30px" marginLeft="10px"/>

        <Flex direction="column">
            <Text marginLeft="15px" >
                {title}
            </Text>

            <Text marginLeft="15px">
                {subtitle}
            </Text>
        </Flex>
    </Flex>
  );
}

export function BoxNotificationRent({title, subtitle}) {
    return (
        <Flex backgroundColor="#BFDDE0" marginInline="20px" marginTop="35px" height="100px"
        borderRadius="12px" alignItems="center">
            <UnlockIcon height="20px" width="30px" marginLeft="10px"/>

            <Flex direction="column">

                <Text marginLeft="15px" >
                    {title}
                </Text>

                <Text marginLeft="15px">
                    {subtitle}
                </Text>

            </Flex>

        </Flex>
    );
  }

  export function BoxNotificationPayment({title, subtitle}) {
    return (
        <Flex backgroundColor="#BFDDE0" marginInline="20px" marginTop="35px" height="100px"
                      borderRadius="12px" alignItems="center">
                    <CheckIcon height="20px" width="30px" marginLeft="10px"/>

            <Flex direction="column">

                <Text marginLeft="15px">
                    {title}
                </Text>

                <Text marginLeft="15px">
                    {subtitle}
                </Text>

            </Flex>

        </Flex>
    );
  }
