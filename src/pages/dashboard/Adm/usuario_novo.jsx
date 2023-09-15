import React from "react";
import { Main } from "../../../layout/Main";
import { Container } from "../../../layout/Container";
import { Flex, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody,  useDisclosure } from "@chakra-ui/react";
import PageTitle from "../../../components/PageTitle";
import { InputLabel } from "../../../components/Input/Geral";
import { ButtonExit } from "../../../components/Button";
import { useNavigate } from "react-router-dom";

function NewUsuarios(){
    const {isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate()
    return(
        <>
            <Main>
                <Container>
                    <Flex
                        width="full"
                        padding="2rem"
                        direction="column"
                        textColor="#558085"
                    >
                        <PageTitle title={"Usuários > Novo Usuário"} />

                        <Flex
                            backgroundColor="white.100"
                            width="full"
                            height="280px"
                            borderRadius="15px"
                            alignItems="flex-start"
                            marginTop="2rem"
                            direction="column"
                        >
                            <Text
                            fontSize="35px"
                            textColor="#558085"
                            fontWeight="bold"
                            marginLeft="1.3rem"
                            marginTop="1rem"
                            >
                            Novo Usuário
                            </Text> 

                            <Flex w="full" paddingX="1.3rem">
                                <InputLabel label={"Nome"} value={"John Deo"} />   

                                <InputLabel
                                label={"Email"}
                                value={"JohnDeo@gmail.com"}
                                marginLeft="2rem"
                                />
                            </Flex>

                            <Flex
                                w="full"
                                alignItems="baseline"
                                paddingX="1.3rem"
                                marginTop="3.5rem"
                                >
                                <ButtonExit title={"Voltar"} onClick={() => navigate("/Adm/Usuarios")}/>
                                <ButtonExit title={"Salvar"} marginLeft="2rem" onClick={onOpen}/>
                                </Flex>

                        </Flex>
                    </Flex>
                </Container>
            </Main>

            <Flex >

    <Modal  isOpen={isOpen} onClose={onClose} >
              <ModalOverlay />
              <ModalContent 
                background="#fff" 
                alignItems="center" 
                height={{base: "360px", sm:"330px"}} 
                width={{base: "90%", sm: "90%"}} 
                marginY="auto">
                <ModalHeader marginBottom="2.3rem" fontSize="20px" textColor="#558085" marginTop="5px">Criar Usuário?</ModalHeader>
                <ModalBody textAlign="center">
                  <Text marginBottom="1.1rem" fontSize="14px">Ao criar esse usuário, você possibilita o acesso dele dentro da plataforma.</Text>
                  <Text fontSize="14px">Você realmente deseja criar?</Text>
                </ModalBody>
                  <Flex  marginBottom="1.4rem" marginTop={{base: "10px"}} textAlign="center" direction={{base: "column", sm: "row", lg: "row"}} justifyContent="center" alignItems="center">
                  <ButtonExit title={"Voltar"} marginTop="10px" paddingRight={{base: "195%", sm: "95%"}} paddingLeft={{base: "195%", sm: "95%"}} onClick={onClose}/>
                  <ButtonExit title={"Criar"} marginTop={{base: "10px"}} marginLeft={{sm: "1rem"}} paddingRight={{base: "195%", sm: "95%"}} paddingLeft={{base: "195%", sm: "95%"}} onClick={() => navigate("/Adm/Usuarios")}/>
                  </Flex>
              </ModalContent>
            </Modal> 

            </Flex>
    </>
 );
}

export default NewUsuarios;