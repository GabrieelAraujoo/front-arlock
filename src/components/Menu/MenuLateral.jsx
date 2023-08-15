import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { LockIcon } from "@chakra-ui/icons";
import { MenuTitle, MenuSubtitle } from "./MenuTitle";
import { useLocation, useNavigate } from "react-router";

export default function MenuLateral() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  function sendRoute(route) {
    navigate(route);
  }

  return (
    <Flex
      backgroundColor="white.100"
      width="14%"
      height="full"
      direction="column"
      alignItems="center"
    >
      <Flex marginTop="35px" marginBottom="2rem">
        <LockIcon color="#558085" height="70px" width="70px" />

        <Flex
          direction="column"
          alignItems="flex-start"
          marginTop="25px"
          marginLeft="5px"
          marginBottom="1rem"
        >
          <Text fontWeight="bold" textColor="#A3CCB8">
            ARLOCK
          </Text>
          <Text fontWeight="bold" fontSize="10px">
            ETECIA
          </Text>
        </Flex>
      </Flex>

      <MenuTitle
        title={"Home"}
        onClick={() => sendRoute("/Adm/Home")}
        cursor="pointer"
        borderRadius="10px"
        _hover={{ color: "#034951", bgColor: "#BFDDE0" }}
        _focus={{ bgColor: "#BFDDE0", color: "#034951" }}
        color={pathname === "/Adm/Home" ? "#034951" : "#558085"}
      />
      <MenuTitle
        title={"Perfil"}
        onClick={() => sendRoute("/Adm/Perfil")}
        cursor="pointer"
        borderRadius="10px"
        _hover={{ color: "#034951", bgColor: "#BFDDE0" }}
        _focus={{ bgColor: "#BFDDE0", color: "#034951" }}
        color={pathname === "/Adm/Perfil" ? "#034951" : "#558085"}
      />

      <MenuTitle
        title={"Pessoas"}
        cursor="pointer"
        borderRadius="10px"
        _hover={{ color: "#034951", bgColor: "#BFDDE0" }}
        _focus={{ bgColor: "#BFDDE0", color: "#034951" }}
        color={pathname === "/Adm/Pessoas" ? "#034951" : "#558085"}
      />

      <MenuSubtitle
        subtitle="Alunos"
        onClick={() => sendRoute("/Adm/Alunos")}
        cursor="pointer"
        borderRadius="10px"
        _hover={{ color: "#034951", bgColor: "#BFDDE0" }}
        _focus={{ bgColor: "#BFDDE0", color: "#034951" }}
        color={pathname === "/Adm/Alunos" ? "#034951" : "#558085"}
      />

      <MenuSubtitle
        subtitle="Usuários"
        onClick={() => sendRoute("/Adm/Usuarios")}
        cursor="pointer"
        borderRadius="10px"
        _hover={{ color: "#034951", bgColor: "#BFDDE0" }}
        _focus={{ bgColor: "#BFDDE0", color: "#034951" }}
        color={pathname === "/Adm/Usuarios" ? "#034951" : "#558085"}
      />

      <MenuTitle
        title={"Armários"}
        onClick={() => sendRoute("/Adm/Armarios")}
        cursor="pointer"
        borderRadius="10px"
        _hover={{ color: "#034951", bgColor: "#BFDDE0" }}
        _focus={{ bgColor: "#BFDDE0", color: "#034951" }}
        color={pathname === "/Adm/Armarios" ? "#034951" : "#558085"}
      />
      <MenuTitle
        title={"Aluguéis"}
        onClick={() => sendRoute("/Adm/Alugueis")}
        cursor="pointer"
        borderRadius="10px"
        _hover={{ color: "#034951", bgColor: "#BFDDE0" }}
        _focus={{ bgColor: "#BFDDE0", color: "#034951" }}
        color={pathname === "/Adm/Alugueis" ? "#034951" : "#558085"}
      />
    </Flex>
  );
}
