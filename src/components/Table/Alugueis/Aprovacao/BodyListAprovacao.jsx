import { Flex, Text, Tbody, Td, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody,  useDisclosure } from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { ButtonExit } from "../../../Button";


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

        <Flex >

    <Modal  isOpen={isOpen} onClose={onClose} >
              <ModalOverlay />
              <ModalContent 
                background="#fff" 
                alignItems="center" 
                height={{base: "360px", sm:"330px"}} 
                width={{base: "90%", sm: "90%"}} 
                marginY="auto">
                <ModalHeader marginBottom="2.3rem" fontSize="20px" textColor="#558085" marginTop="5px">Aprovar Aluguel?</ModalHeader>
                <ModalBody textAlign="center">
                  <Text marginBottom="1.1rem" fontSize="14px">Ao aprovar esse aluguel, você confirma o pagamento e libera o aluno para usar o armário durante o semestre.</Text>
                  <Text fontSize="14px">Você realmente deseja aprovar?</Text>
                </ModalBody>
                  <Flex  marginBottom="1.4rem" marginTop={{base: "10px"}} textAlign="center" direction={{base: "column", sm: "row", lg: "row"}} justifyContent="center" alignItems="center">
                  <ButtonExit title={"Voltar"} marginTop="10px" paddingRight={{base: "185%", sm: "85%"}} paddingLeft={{base: "185%", sm: "85%"}} onClick={onClose}/>
                  <ButtonExit title={"Aprovar"} marginTop={{base: "10px"}} marginLeft={{sm: "1rem"}} paddingRight={{base: "185%", sm: "85%"}} paddingLeft={{base: "185%", sm: "85%"}} onClick={onClose}/>
                  </Flex>
              </ModalContent>
            </Modal> 

            </Flex>

            <Flex >

    <Modal  isOpen={isOpen} onClose={onClose} >
              <ModalOverlay />
              <ModalContent 
                background="#fff" 
                alignItems="center" 
                height={{base: "360px", sm:"330px"}} 
                width={{base: "90%", sm: "90%"}} 
                marginY="auto">
                <ModalHeader marginBottom="2.3rem" fontSize="20px" textColor="#558085" marginTop="5px">Anular Aluguel?</ModalHeader>
                <ModalBody textAlign="center">
                  <Text marginBottom="1.1rem" fontSize="14px">Ao anular esse aluguel, você reprova o pagamento do aluno e libera o armário para reserva.</Text>
                  <Text fontSize="14px">Você realmente deseja anular?</Text>
                </ModalBody>
                  <Flex  marginBottom="1.4rem" marginTop={{base: "10px"}} textAlign="center" direction={{base: "column", sm: "row", lg: "row"}} justifyContent="center" alignItems="center">
                  <ButtonExit title={"Voltar"} marginTop="10px" paddingRight={{base: "185%", sm: "85%"}} paddingLeft={{base: "185%", sm: "85%"}} onClick={onClose}/>
                  <ButtonExit title={"Anular"} marginTop={{base: "10px"}} marginLeft={{sm: "1rem"}} paddingRight={{base: "185%", sm: "85%"}} paddingLeft={{base: "185%", sm: "85%"}} onClick={onClose}/>
                  </Flex>
              </ModalContent>
            </Modal> 

            </Flex>   
        </>
 );
}

// import { ButtonExit } from "../../../components/Button";
