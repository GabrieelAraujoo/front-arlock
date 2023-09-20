import React, { useState } from "react";
import {
  Flex,
  Text,
  Box,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useBoolean,
} from "@chakra-ui/react";
import { ButtonExit } from "../Button";

export function BoxArmario({ armario }) {
  // const { showFirstModal, setShowFirstModal } = useBoolean();
  // const { secondModal, setSecondModal } = useBoolean();

  // function handleSelected() {
  //   if (armario.status === true) {
  //     setShowFirstModal.on();
  //   }
  // }

  // function handleReserva() {
  //   setShowFirstModal.off();
  // }

  return (
    <>
      <Flex
        width="130px"
        height="186px"
        background="#bfdde0"
        opacity={armario.status === true ? "100%" : "50%"}
        borderRadius="12px"
        direction="column"
        alignItems="center"
        justifyContent="space-around"
        cursor={armario.status === true ? "pointer" : "not-allowed"}
        _hover={{ background: "#60E8F8" }}
        // onClick={() => handleSelected()}
      >
        <Flex width="full" direction="column" alignItems="center">
          <Box
            width="70%"
            height="8px"
            background="#558085"
            borderRadius="10px"
            marginBottom=".4rem"
          />
          <Box
            width="70%"
            height="8px"
            background="#558085"
            borderRadius="10px"
            marginBottom=".4rem"
          />
          <Box
            width="70%"
            height="8px"
            background="#558085"
            borderRadius="10px"
          />
        </Flex>

        <Flex width="full" marginLeft="2.2rem">
          <Flex
            width="20px"
            height="20px"
            background="#558085"
            borderRadius="50%"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              width="10px"
              height="10px"
              borderRadius="50%"
              background="#D9D9D9"
            />
          </Flex>
        </Flex>

        <Text textColor="#558085" fontSize="13px">
          Armário {armario.letra} {armario.numero}
        </Text>
      </Flex>

      {/* Primeiro modal */}
      {/* <Modal isOpen={showFirstModal} onClose={setShowFirstModal.off}>
        <ModalOverlay />
        <ModalContent
          background="#fff"
          alignItems="center"
          height={{ base: "360px", sm: "330px" }}
          width={{ base: "90%", sm: "90%" }}
          marginY="auto"
        >
          <ModalHeader fontSize="20px" textColor="#558085" marginTop="5px">
            Reservar armário?
          </ModalHeader>
          <ModalBody w="full">
            <Flex direction="column">
              <Text marginBottom="1rem" fontSize="20px" textColor="#558085">
                Armário {armario.letra}
                {armario.numero}
              </Text>
              <Flex>
                <Text marginBottom="1.1rem" fontSize="14px" marginRight="1rem">
                  Localização:
                </Text>
                <Text fontSize="14px">{armario.localization}</Text>
              </Flex>
              <Flex>
                <Text marginBottom="1.1rem" fontSize="14px" marginRight="1rem">
                  Valor:
                </Text>
                <Text fontSize="14px">R$ 50,00</Text>
              </Flex>
            </Flex>
          </ModalBody>
          <Flex
            marginBottom="1.4rem"
            textAlign="center"
            marginTop={{ base: "10px" }}
            direction={{ base: "column", sm: "row", lg: "row" }}
            justifyContent="center"
            alignItems="center"
          >
            <ButtonExit
              title={"Cancelar"}
              marginTop="10px"
              paddingRight={{ base: "125%", sm: "65%" }}
              paddingLeft={{ base: "125%", sm: "65%" }}
              onClick={setShowFirstModal.off}
            />
            <ButtonExit
              title={"Reservar"}
              marginTop={{ base: "10px" }}
              marginLeft={{ sm: "1rem" }}
              paddingRight={{ base: "125%", sm: "65%" }}
              paddingLeft={{ base: "125%", sm: "65%" }}
              onClick={() => handleReserva()}
            />
          </Flex>
        </ModalContent>
      </Modal> */}

      {/* Segundo modal */}
      {/* <Modal isOpen={isOpenSecondModal} onClose={onCloseSecondModal}>
        <ModalOverlay />
        <ModalContent
          background="#fff"
          alignItems="center"
          height={{ base: "360px", sm: "330px" }}
          width={{ base: "90%", sm: "90%" }}
          marginY="auto"
        >
          <ModalHeader fontSize="20px" textColor="#558085" marginTop="5px">
            Reservar armário?
          </ModalHeader>
          <ModalBody w="full">
            <Flex direction="column">
              <Text marginBottom="1rem" fontSize="20px" textColor="#558085">
                Armário {armario.letra}
                {armario.numero}
              </Text>
              <Flex>
                <Text marginBottom="1.1rem" fontSize="14px" marginRight="1rem">
                  Localização:
                </Text>
                <Text fontSize="14px">{armario.localization}</Text>
              </Flex>
              <Flex>
                <Text marginBottom="1.1rem" fontSize="14px" marginRight="1rem">
                  Valor:
                </Text>
                <Text fontSize="14px">R$ 50,00</Text>
              </Flex>
            </Flex>
          </ModalBody>
          <Flex
            marginBottom="1.4rem"
            textAlign="center"
            marginTop={{ base: "10px" }}
            direction={{ base: "column", sm: "row", lg: "row" }}
            justifyContent="center"
            alignItems="center"
          >
            <ButtonExit
              title={"Cancelar"}
              marginTop="10px"
              paddingRight={{ base: "125%", sm: "65%" }}
              paddingLeft={{ base: "125%", sm: "65%" }}
              onClick={onCloseSecondModal}
            />
            <ButtonExit
              title={"Reservar"}
              marginTop={{ base: "10px" }}
              marginLeft={{ sm: "1rem" }}
              paddingRight={{ base: "125%", sm: "65%" }}
              paddingLeft={{ base: "125%", sm: "65%" }}
              onClick={onCloseSecondModal}
            />
          </Flex>
        </ModalContent>
      </Modal> */}
    </>
  );
}
