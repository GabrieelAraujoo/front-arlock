import {
  Tbody,
  Td,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Flex,
  Text,
  useBoolean,
  useDisclosure,
  Tooltip,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { ButtonExit } from "../../../components/Button";
import React from "react";
import { DelArmarios } from "../../../hook/armarios/useDelArmarios";

export function BodyListArmarios({ armarios }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [showModal, setShowModal] = useBoolean();

  function handleDelete(id) {
    const res = DelArmarios(id);

    console.log(res);

    // setShowModal.on();

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
          <Tooltip label="Deletar">
            <DeleteIcon
              marginLeft="9px"
              height="20px"
              width="20px"
              color="gray.400"
              cursor="pointer"
              isDisable={true}
              onClick={onOpen}
            />
          </Tooltip>
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
              <Text marginBottom="1.1rem" fontSize="1rem">
                Ao excluir este armário, você impossibilita o acesso dele dentro
                da plataforma. O histórico dele também será excluído.
              </Text>
              <Text fontSize="1rem">Você realmente deseja excluir?</Text>
            </ModalBody>

            <Flex
              w="full"
              alignItems="baseline"
              paddingX="1.3rem"
              marginBottom="1rem"
            >
              <ButtonExit title={"Voltar"} onClick={onClose} />
              <ButtonExit
                title={"Excluir"}
                marginLeft="2rem"
                onClick={() => handleDelete(armarios.id)}
              />
            </Flex>
          </ModalContent>
        </Modal>
      </Flex>

      {/* Modal atualizado */}
      <Modal
        isOpen={showModal}
        onClose={showModal.off}
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
