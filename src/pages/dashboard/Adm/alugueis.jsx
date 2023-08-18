import React from "react";
import { Main } from "../../../layout/Main";
import { Container } from "../../../layout/Container";
import { Flex, Text } from "@chakra-ui/react";
import PageTitle from "../../../components/PageTitle";
import { Table } from "@chakra-ui/react";
import { InputPesquisa } from "../../../components/Input/Pesquisa";

function Alugueis(){
    return(
        <Main>
            <Container>
                <Flex
                        width="full"
                        padding="2rem"
                        direction="column"
                        textColor="#558085"
                 >
                        <PageTitle title={"Aluguéis"} />

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
                        Lista de Aprovação
                        </Text>

                        <Flex
                            justify="space-between"
                            align="center"
                            marginLeft="20px"
                            w="full"
                            alignItems="baseline"
                            >
                            {/* componente pesquisa */}
                            <InputPesquisa />
                        </Flex>
                    </Flex>    
                </Flex>        
            </Container>
        </Main>
 );
}

export default Alugueis;