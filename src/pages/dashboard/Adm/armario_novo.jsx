import React, { useState } from "react";
import { Main } from "../../../layout/Main";
import { Container } from "../../../layout/Container";
import { Flex, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody,  useDisclosure, useToast } from "@chakra-ui/react";
import PageTitle from "../../../components/PageTitle";
import { ButtonExit } from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import { baseFormNewLocker, errorFormNewLocker } from "../../../utils/baseFormNewLocker";
  import { validateFormNewLocker } from "../../../utils/validateFormNewLocker";
import { SelectLabel } from "../../../components/Select/SelectCurso";
import { listCursos } from "../../../Mock/listCursos";
import { InputLabel } from "../../../components/Input/Geral";

function NewArmarios (){
    const {isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate()
    const [userData, setUserData] = useState("");
    const [formData, setformData] = useState(baseFormNewLocker);
    const [error, setError] = useState(errorFormNewLocker);
    const toast = useToast();

    const changeValue = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
        setformData(userData);
      };

      async function createUser() {
        console.log(formData);
        const errors = await validateFormNewLocker(formData, error, setError);
        
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
          navigate("/Adm/Armarios");
          return toast({
            position: "bottom-right",
            title: "Sucesso",
            description: "Armário criado com sucesso!",
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
                    <PageTitle title={"Armários > Novo Armário"} />

                    <Flex
                            backgroundColor="white.100"
                            width="full"
                            height="380px"
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
                            Criar Novos Armários
                            </Text>

                            <Flex w="full" paddingX="1.3rem">
                                <InputLabel  
                                label={"Letra"} 
                                name="letra"
                                id="letra"
                                value={userData.letra}
                                onChange={changeValue}
                                isInvalid={error && error.errorLetra} />   

                                <InputLabel 
                                label={"Quantidade"}
                                name="quantidade"
                                id="quantidade" 
                                marginRight="35px"
                                type="number"
                                value={userData.quantidade}
                                onChange={changeValue}
                                isInvalid={error && error.errorQuantidade}
                                marginLeft="2rem"
                                />
                            </Flex>

                            <Flex w="full" paddingX="1.3rem">
                                <SelectLabel
                                label={"Concurso"} 
                                options={listCursos}
                                name="curso"
                                id="curso"
                                value={userData.curso}
                                onChange={changeValue}
                                isInvalid={error && error.errorCurso}/>   

                                <InputLabel  
                                label={"Manutenção"} 
                                name="manutencao"
                                id="manutencao" 
                                marginRight="35px"
                                value={userData.manutencao}
                                onChange={changeValue}
                                isInvalid={error && error.errorManutencao}
                                marginLeft="2rem"
                                />
                            </Flex>

                            <Flex
                                w="full"
                                alignItems="baseline"
                                paddingX="1.3rem"
                                marginTop="3.5rem"
                                >
                                <ButtonExit title={"Voltar"} onClick={() => navigate("/Adm/Armarios")}/>
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
                <ModalHeader marginBottom="2.3rem" fontSize="20px" textColor="#558085" marginTop="5px">Criar Novo Armário?</ModalHeader>
                <ModalBody textAlign="center">
                  <Text marginBottom="1.1rem" fontSize="14px">Ao criar novos armários, você possibilita o aluguel deles pelos alunos do curso selecionado.</Text>
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

export default NewArmarios;