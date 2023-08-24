import { Tbody, Td, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody,  useDisclosure, Flex, Text } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { ButtonExit } from "../../../components/Button";


export function BodyListArmarios({ armarios }){
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
        <>
        <Tbody fontSize="13px" paddingTop="12px" paddingBottom="1px">
            <Td width="10%">{armarios.letra}</Td>
            <Td width="15%">{armarios.quantidade}</Td>
            <Td width="25%">{armarios.curso}</Td>
            <Td width="15%">{armarios.manutencao}</Td>
            <Td width="15%">{armarios.alugados}</Td>
            <Td><DeleteIcon 
                    marginLeft="9px"
                    height="20px"
                    width="20px"
                    color="gray.400"
                    onClick={onOpen}/>
            </Td>
        </Tbody>    

<Flex >

<Modal  isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent background="#fff" alignItems="center" height="330px" maxWidth="35%" marginY="auto">
            <ModalHeader marginBottom="2.3rem" fontSize="20px" textColor="#558085" marginTop="5px">Excluir Armários?</ModalHeader>
            <ModalBody textAlign="center">
              <Text marginBottom="1.1rem" fontSize="14px">Ao excluir esses armários, você impossibilita o acesso para eles dentro da plataforma.</Text>
              <Text fontSize="14px">Você realmente deseja excluir?</Text>
            </ModalBody>
              <Flex  marginBottom="1.4rem" textAlign="center">
              <ButtonExit title={"Voltar"} paddingRight="80px" paddingLeft="80px" onClick={onClose}/>
              <ButtonExit title={"Excluir"} marginLeft="20px" paddingRight="80px" paddingLeft="80px" onClick={onClose}/>
              </Flex>
          </ModalContent>
        </Modal> 

        </Flex>
        </>
 );
}

