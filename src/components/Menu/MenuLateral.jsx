import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { LockIcon } from '@chakra-ui/icons';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'
import {MenuTitle, MenuSubtitle} from "./MenuTitle";

export default function MenuLateral() {
  return (
    <Flex backgroundColor="white.100" width="14%" height="full" direction="column" alignItems="center" >

          <Flex marginTop="35px">

          <LockIcon color="#558085" height="70px" width="70px" />

          <Flex direction="column" alignItems="flex-start" marginTop="25px" marginLeft="5px">

          <Text fontWeight="bold" textColor="#A3CCB8"> ARLOCK </Text>
          <Text fontWeight="bold" fontSize="10px"> ETECIA </Text>

          </Flex>

          </Flex>

          <MenuTitle title={"Home"} />
          <MenuTitle title={"Perfil"} />
          <MenuTitle title={"Pessoas"} />

          <MenuSubtitle subtitle="Alunos"/>
          <MenuSubtitle subtitle="Usuários"/>

          <MenuTitle title={"Armários"} />
          <MenuTitle title={"Aluguéis"} />

    </Flex>
  );
}
