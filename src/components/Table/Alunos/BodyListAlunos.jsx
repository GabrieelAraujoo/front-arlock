import {  Text, Button, Tbody, Td, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Flex } from "@chakra-ui/react";
import { LockIcon, UnlockIcon } from "@chakra-ui/icons";
import { ButtonExit } from "../../../components/Button";

export function BodyListAlunos({ aluno }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <Tbody fontSize="13px" paddingTop="12px" paddingBottom="1px">
      <Td width="25%">{aluno.rm}</Td>
      <Td width="25%">{aluno.nome}</Td>
      <Td width="25%">{aluno.curso}</Td>
      {aluno.status === "ativo" ? (
        <Td width="25%">
          <UnlockIcon
            marginLeft="9px"
            height="20px"
            width="20px"
            color="gray.400"
            onClick={onOpen}
            />
        </Td>
      ) : (
        <Td width="25%">
          <LockIcon marginLeft="9px" height="20px" width="20px" color="black" onClick={onOpen}/>
        </Td>
      )}
    </Tbody>

        <Flex justifyContent="center">

    <Modal  isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent background="#fff" >
                <ModalHeader>Bloquear Aluno?</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text>Ao bloquear este aluno, você impossibilita o acesso dele dentro da plataforma.</Text>
                  <Text>Você realmente deseja bloquear?</Text>
                </ModalBody>
                  <Flex alignItems={"baseline"}>
                  <ButtonExit title={"Voltar"}/>
                  <ButtonExit title={"Bloquear"}/>
                  </Flex>
                <ModalFooter>
                  
                </ModalFooter>
              </ModalContent>
            </Modal> 

            </Flex>  

    <Flex justifyContent="center">

    <Modal  isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent background="#fff" >
                <ModalHeader>Desbloquear Aluno?</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text>Ao bloquear este aluno, você impossibilita o acesso dele dentro da plataforma.</Text>
                  <Text>Você realmente deseja bloquear?</Text>
                </ModalBody>
                  <Flex alignItems={"baseline"}>
                  <ButtonExit title={"Voltar"}/>
                  <ButtonExit title={"Bloquear"}/>
                  </Flex>
                <ModalFooter>
                  
                </ModalFooter>
              </ModalContent>
            </Modal> 

            </Flex>          
    </>
  );
}
