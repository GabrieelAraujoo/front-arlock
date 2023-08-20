import React from "react";
import { Main } from "../../../layout/Main";
import { Container } from "../../../layout/Container";
import { Flex, Text, IconButton, Table } from "@chakra-ui/react";
import PageTitle from "../../../components/PageTitle";
import { InputPesquisa } from "../../../components/Input/Pesquisa";
import { HeadListUsuarios } from "../../../components/Table/Usuarios/HeadListUsuarios";
import { BodyListUsuarios } from "../../../components/Table/Usuarios/BodyListUsuarios";
import { listUsuarios } from "../../../Mock/listUsuarios";
import { AddIcon } from '@chakra-ui/icons'
import { useNavigate } from "react-router-dom";



function Usuarios(){
    const navigate = useNavigate()

    return(
        
        <Main>
            <Container>
                <Flex
                    width="full"
                    padding="2rem"
                    direction="column"
                    textColor="#558085"
                >
                    <PageTitle title={"Pessoas > Usuários"} />

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
                        Usuários
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
                                onClick={() => navigate("/Adm/NovoUsuario")}
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
                                <HeadListUsuarios/>

                                {listUsuarios.map((item, index) => (
                                <BodyListUsuarios key={index} usuario={item} />
                                ))}
                            </Table>
                        </Flex>
                    </Flex>
                </Flex>
            </Container>
        </Main>
        
        
        
 );
}

export default Usuarios;