import React from "react";
import { Flex } from "@chakra-ui/react";

export function MenuTitle({title}) {
  return (
    <Flex backgroundColor="white.100" width="90%"  textColor="#558085" alignItems="center" fontSize='25px' fontWeight="bold" marginBottom="1rem">
      <a href="#">{title}</a>
    </Flex>
  );
  }

  export function MenuSubtitle({subtitle}) {
    return (
      <Flex backgroundColor="white.100" width="80%"  textColor="#558085" alignItems="center" marginBottom="1.5rem">

          <a href="#"><li> {subtitle} </li></a>

        </Flex>
    );
    }
