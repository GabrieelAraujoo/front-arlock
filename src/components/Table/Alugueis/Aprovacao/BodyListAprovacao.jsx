import { Flex, Text, Tbody, Td, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

export function BodyListAprovacao({ aprovacao }){
    const {isOpen, onOpen, onClose } = useDisclosure()
    return(
        <>
        <Tbody fontSize="13px" paddingTop="12px" paddingBottom="1px">
            <Td width="15%">{aprovacao.armario}</Td>
            <Td width="20%">{aprovacao.aluno}</Td>
            <Td width="10%">{aprovacao.rm}</Td>
            <Td width="25%">{aprovacao.curso}</Td>
            <Td width="15%">{aprovacao.pagamento}</Td>
            <Td width="15%">

                <Flex alignItems="baseline">
                <CheckIcon 
                    height="20px"
                    width="50px"
                    color="gray.400"
                    onClick={onOpen}
                    />
                <CloseIcon 
                    marginLeft="15px"
                    marginRight="10px"
                    height="20px"
                    width="20px"
                    color="gray.400"
                    onClick={onOpen}/>
                </Flex>    
            </Td>
        </Tbody>

        <Flex>
        
        <Modal  isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent background="#fff" alignItems="center" height="330px" maxWidth="35%" marginY="auto">
            <ModalHeader marginBottom="2.3rem" fontSize="20px" textColor="#558085" marginTop="5px">Aprovar Aluguel?</ModalHeader>
            <ModalCloseButton />
            <ModalBody textAlign="center">
              <Text marginBottom="1.1rem" fontSize="14px">Ao aprovar esse aluguel, você confirma o pagamento e libera o aluno para usar o armário durante o semestre.</Text>
              <Text fontSize="14px">Você realmente deseja aprovar?</Text>
            </ModalBody>
              <Flex  marginBottom="1.4rem" textAlign="center">
              
              </Flex>
          </ModalContent>
        </Modal> 

        </Flex>     
        </>
 );
}

// import { ButtonExit } from "../../../components/Button";

// <ButtonExit title={"Voltar"} paddingRight="80px" paddingLeft="80px" />
// <ButtonExit title={"Aprovar"} marginLeft="20px" paddingRight="80px" paddingLeft="80px" />