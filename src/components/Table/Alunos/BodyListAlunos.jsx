import { Text, Tbody, Td, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure, Flex } from "@chakra-ui/react";
import { LockIcon, UnlockIcon } from "@chakra-ui/icons";
import { ButtonExit } from "../../../components/Button";

export function BodyListAlunos({ aluno }) {
  const {isOpen, onOpen, onClose } = useDisclosure()
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

    {/*Box para Bloqueio do Aluno*/ }
    {aluno.status === "ativo" ? (

<Flex >

<Modal  isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent background="#fff" alignItems="center" height="330px" maxWidth="35%" marginY="auto">
            <ModalHeader marginBottom="2.3rem" fontSize="20px" textColor="#558085" marginTop="5px">Bloquear Aluno?</ModalHeader>
            <ModalCloseButton />
            <ModalBody textAlign="center">
              <Text marginBottom="1.1rem" fontSize="14px">Ao bloquear este aluno, você impossibilita o acesso dele dentro da plataforma.</Text>
              <Text fontSize="14px">Você realmente deseja bloquear?</Text>
            </ModalBody>
              <Flex  marginBottom="1.4rem" textAlign="center">
              <ButtonExit title={"Voltar"} paddingRight="80px" paddingLeft="80px" />
              <ButtonExit title={"Bloquear"} marginLeft="20px" paddingRight="80px" paddingLeft="80px"/>
              </Flex>
          </ModalContent>
        </Modal> 

        </Flex>  

) : ( 

    /*Box para Desbloqueio do Aluno*/ 
    <Flex >

    <Modal  isOpen={isOpen} onClose={onClose} >
              <ModalOverlay />
              <ModalContent background="#fff" alignItems="center" height="330px" maxWidth="35%" marginY="auto">
                <ModalHeader marginBottom="2.3rem" fontSize="20px" textColor="#558085" marginTop="5px">Desbloquear Aluno?</ModalHeader>
                <ModalCloseButton />
                <ModalBody textAlign="center">
                  <Text marginBottom="1.1rem" fontSize="14px">Ao desbloquear este aluno, você possibilita o acesso dele dentro da plataforma.</Text>
                  <Text fontSize="14px">Você realmente deseja desbloquear?</Text>
                </ModalBody>
                  <Flex  marginBottom="1.4rem" textAlign="center">
                  <ButtonExit title={"Voltar"} paddingRight="80px" paddingLeft="80px"/>
                  <ButtonExit title={"Desbloquear"} marginLeft="20px" paddingRight="80px" paddingLeft="80px"/>
                  </Flex>
              </ModalContent>
            </Modal> 

            </Flex>    
            )}      
    </>
  );
}
