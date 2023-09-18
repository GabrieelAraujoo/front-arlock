import React, { useState } from "react";
import { Main } from "../../../layout/Main";
import { Container } from "../../../layout/Container";
import { Flex, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody,  useDisclosure, useToast } from "@chakra-ui/react";
import PageTitle from "../../../components/PageTitle";
import { InputLabel } from "../../../components/Input/Geral";
import { ButtonExit } from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import {
    baseFormNewUser,
    errorFormNewUser,
  } from "../../../JS/baseFormNewUser";
  import { validateFormNewUser } from "../../../JS/validateFormNewUser";

function NewUsuarios(){
    const {isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate()
    const [userData, setUserData] = useState("");
    const [formData, setformData] = useState(baseFormNewUser);
    const [error, setError] = useState(errorFormNewUser);
    const toast = useToast();

    const changeValue = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
        setformData(userData);
      };

      async function createUser() {
        console.log(formData);
        const errors = await validateFormNewUser(formData, error, setError);
        if (errors.length !== 0) {
          toast({
            title: "Erro!",
            status: "error",
            description:
              "Alguns Campos Obrigatórios não foram preenchidos, verefique os campos que estão em vermelho!",
            duration: 5000,
            isClosable: true,
          });
          errors.map((erro) => {
            return toast({
              title: `${erro}`,
              status: "warning",
              duration: 5000,
              isClosable: true,
            });
          });
        } else {
          // const res = await PostUserForm(id, user.token, formData);
          // if (res) {
          navigate("/Adm/Usuarios");
          return toast({
            position: "bottom-right",
            title: "Sucesso",
            description: "Usuário criado com sucesso!",
            status: "success",
            duration: 5000,
            isClosable: true,
          })
        }
    };  
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
                            Criar Novo Usuário
                            </Text> 

                            <Flex w="full" paddingX="1.3rem">
                                <InputLabel 
                                label={"Nome"} 
                                name="nome"
                                id="nome"
                                value={userData.nome} 
                                onChange={changeValue}
                                isInvalid={error && error.errorNome}/>   

                                <InputLabel
                                label={"Email"}
                                name="email"
                                id="email"
                                value={userData.email}
                                onChange={changeValue}
                                isInvalid={error && error.errorEmail}
                                
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
                  <ButtonExit title={"Criar"} marginTop={{base: "10px"}} marginLeft={{sm: "1rem"}} paddingRight={{base: "195%", sm: "95%"}} paddingLeft={{base: "195%", sm: "95%"}} onClick={() => createUser()}/>
                  </Flex>
              </ModalContent>
            </Modal> 

            </Flex>
    </>
 );
}

export default NewUsuarios;