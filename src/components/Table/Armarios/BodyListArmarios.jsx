import { Tbody, Td, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody,  useDisclosure, Flex, Text } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { ButtonExit } from "../../../components/Button";
import React, { useState } from "react";
import { listArmariosAdm } from "../../../Mock/listArmariosAdm";


export function BodyListArmarios({ armarios }){
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [lockers, SetLockers] = useState(listArmariosAdm.map((item, index) => (
      <listArmariosAdm key={index} armarios={item} />)))

  const handleDelete = (deletingLocker) => {
      const newLockers = lockers.filter((locker) => locker !== deletingLocker)
      SetLockers(newLockers)
  }
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
                    cursor="pointer"
                    onClick={onOpen}/>
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
                <ModalHeader marginBottom="2.3rem" fontSize="20px" textColor="#558085" marginTop="5px">Excluir Armários?</ModalHeader>
                <ModalBody textAlign="center">
                  <Text marginBottom="1.1rem" fontSize="14px">Ao excluir esses armários, você impossibilita o acesso para eles dentro da plataforma.</Text>
                  <Text fontSize="14px">Você realmente deseja excluir?</Text>
                </ModalBody>
                  <Flex  marginBottom="1.4rem" marginTop={{base: "10px"}} textAlign="center" direction={{base: "column", sm: "row", lg: "row"}} justifyContent="center" alignItems="center">
                  <ButtonExit title={"Voltar"} marginTop="10px" paddingRight={{base: "185%", sm: "85%"}} paddingLeft={{base: "185%", sm: "85%"}} onClick={onClose}/>
                  <ButtonExit title={"Excluir"} marginTop={{base: "10px"}} marginLeft={{sm: "1rem"}} paddingRight={{base: "185%", sm: "85%"}} paddingLeft={{base: "185%", sm: "85%"}} onClick={() => handleDelete(lockers) && onClose} />
                  </Flex>
              </ModalContent>
            </Modal> 

            </Flex>
        </>
 );
}

