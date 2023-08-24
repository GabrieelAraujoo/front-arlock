import React from "react";
import { Main } from "../../../layout/Main";
import { Container } from "../../../layout/Container";
import { Flex, Text,IconButton, Table, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody,  useDisclosure} from "@chakra-ui/react";
import PageTitle from "../../../components/PageTitle";
import { InputPesquisa } from "../../../components/Input/Pesquisa";
import { HeadListArmarios } from "../../../components/Table/Armarios/HeadListArmarios";
import { listArmarios } from "../../../Mock/listArmarios";
import { BodyListArmarios } from "../../../components/Table/Armarios/BodyListArmarios";
import { AddIcon } from '@chakra-ui/icons'
import { useNavigate } from "react-router-dom";
import { ButtonExit } from "../../../components/Button";

function Armarios(){
    const navigate = useNavigate()
    const { isOpen,  onClose } = useDisclosure()

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
                    <PageTitle title={"Armários"} />

                    <Flex
                        backgroundColor="white.100"
                        width="full"
                        height="full"
                        borderRadius="15px"
                        alignItems="flex-start"
                        marginTop="1rem"
                        direction="column"
                    >
                        <Text
                        fontSize="35px"
                        textColor="#558085"
                        fontWeight="bold"
                        marginLeft="1.3rem"
                        marginTop="1.3rem"
                        >
                        Armários
                        </Text>

                        <Flex
                            justify="space-between"
                            align="center"
                            paddingLeft="20px"
                            w="full"
                            alignItems="baseline"
                            >
                            {/* componente pesquisa */}
                            <InputPesquisa />

                            <IconButton
                                onClick={() => navigate("/Adm/NovoArmario")}
                                isRound={true}
                                variant='solid'
                                colorScheme='teal'
                                aria-label='Done'
                                fontSize='20px'
                                marginRight="20px"
                                icon={<AddIcon />}
                            />
                        </Flex>

                        <Flex
                            w="full"
                            marginTop="3rem"
                            direction="column"
                            overflowX={{ base: "scroll", lg: "hidden" }}
                        >
                            <Table>
                                <HeadListArmarios/>

                                {listArmarios.map((item, index) => (
                                <BodyListArmarios key={index} armarios={item} />
                                ))}
                            </Table> 
                        </Flex>   
                    </Flex>
                </Flex>    
            </Container>
        </Main>
        
        <Flex >

<Modal  isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent background="#fff" alignItems="center" height="330px" maxWidth="35%" marginY="auto">
            <ModalHeader marginBottom="2.3rem" fontSize="20px" textColor="#558085" marginTop="5px">Desbloquear Aluno?</ModalHeader>
            <ModalBody textAlign="center">
              <Text marginBottom="1.1rem" fontSize="14px">Ao desbloquear este aluno, você possibilita o acesso dele dentro da plataforma.</Text>
              <Text fontSize="14px">Você realmente deseja desbloquear?</Text>
            </ModalBody>
              <Flex  marginBottom="1.4rem" textAlign="center">
              <ButtonExit title={"Voltar"} paddingRight="80px" paddingLeft="80px" onClick={onClose}/>
              <ButtonExit title={"Desbloquear"} marginLeft="20px" paddingRight="80px" paddingLeft="80px" onClick={onClose}/>
              </Flex>
          </ModalContent>
        </Modal> 

        </Flex> 
        </>
        
 );
}

export default Armarios;