import {
  Tbody,
  Td,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Flex,
  Text,
  useBoolean,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { ButtonExit } from "../../../components/Button";
import React from "react";
import { DelArmarios } from "../../../hook/armarios/useDelArmarios";

export function BodyListArmarios({ armarios }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showModal, setShowModal] = useBoolean();

  function handleDelete(id) {
    DelArmarios(id);

    setShowModal.on();
    onClose();
  }

  function handleCloseModalConfirm() {
    setShowModal.off();
  }

  return (
    <>
      <Tbody fontSize="13px" paddingTop="12px" paddingBottom="1px">
        <Td width="5%">{armarios.id}</Td>
        <Td width="5%">{armarios.letra}</Td>
        <Td width="15%">{armarios.numero}</Td>
        <Td width="25%">{armarios.curso}</Td>
        <Td width="15%">{armarios.status}</Td>
        <Td>
          <DeleteIcon
            marginLeft="9px"
            height="20px"
            width="20px"
            color="gray.400"
            cursor="pointer"
            onClick={onOpen}
          />
        </Td>
      </Tbody>

      {/* Primeiro Modal */}
      <Flex>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent
            background="#fff"
            alignItems="center"
            height={{ base: "360px", sm: "330px" }}
            width={{ base: "90%", sm: "90%" }}
            marginY="auto"
          >
            <ModalHeader
              marginBottom="2.3rem"
              fontSize="20px"
              textColor="#558085"
              marginTop="5px"
            >
              Excluir Armários?
            </ModalHeader>
            <ModalBody textAlign="center">
              <Text marginBottom="1.1rem" fontSize="14px">
                Ao excluir este armário, você impossibilita o acesso dele dentro
                da plataforma. O histórico dele também será excluído.
              </Text>
              <Text fontSize="14px">Você realmente deseja excluir?</Text>
            </ModalBody>
            <Flex
              marginBottom="1.4rem"
              marginTop={{ base: "10px" }}
              textAlign="center"
              direction={{ base: "column", sm: "row", lg: "row" }}
              justifyContent="center"
              alignItems="center"
            >
              <ButtonExit
                title={"Voltar"}
                marginTop="10px"
                paddingRight={{ base: "185%", sm: "85%" }}
                paddingLeft={{ base: "185%", sm: "85%" }}
                onClick={onClose}
              />
              <ButtonExit
                title={"Excluir"}
                marginTop={{ base: "10px" }}
                marginLeft={{ sm: "1rem" }}
                paddingRight={{ base: "185%", sm: "85%" }}
                paddingLeft={{ base: "185%", sm: "85%" }}
                onClick={() => handleDelete(armarios.id)}
              />
            </Flex>
          </ModalContent>
        </Modal>
      </Flex>

      {/* Modal atualizado */}
      <Modal
        isOpen={showModal}
        onClose={setShowModal.off}
        name="Second-Modal"
        id="Second-Modal"
      >
        <ModalOverlay />
        <ModalContent
          background="#fff"
          alignItems="center"
          width={{ base: "90%", sm: "90%" }}
          marginY="auto"
        >
          <ModalHeader fontSize="20px" textColor="#558085" marginTop="5px">
            Armário excluído!
          </ModalHeader>
          <ModalBody w="full">
            <Text
              marginBottom="1.1rem"
              fontSize="1rem"
              marginRight="1rem"
              textAlign="center"
            >
              O armário foi excluído com sucesso!
            </Text>
          </ModalBody>
          <Flex
            marginBottom="1.4rem"
            textAlign="center"
            marginTop={{ base: "10px" }}
            justifyContent="center"
            alignItems="center"
          >
            <ButtonExit
              title={"Fechar"}
              marginTop="10px"
              onClick={() => handleCloseModalConfirm()}
            />
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
}
