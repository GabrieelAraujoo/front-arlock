import React from "react";
import { Main } from "../../../layout/Main";
import { Container } from "../../../layout/Container";
import { Flex, Text } from "@chakra-ui/react";
import PageTitle from "../../../components/PageTitle";
import { InputLabel } from "../../../components/Input/Geral";
import { ButtonExit } from "../../../components/Button";

function NewArmarios (){
    return(
        <Main>
            <Container>
                <Flex
                     width="full"
                     padding="2rem"
                    direction="column"
                    textColor="#558085"
                >
                    <PageTitle title={"Armários > Novo"} />

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
                            Novos Armários
                            </Text>

                            <Flex w="full" paddingX="1.3rem">
                                <InputLabel label={"Letra"} value={"C"} />   

                                <InputLabel label={"Quantidade"} value={"20"} marginLeft="2rem"
                                />
                            </Flex>

                            <Flex w="full" paddingX="1.3rem">
                                <InputLabel label={"Concurso"} value={"Química"} />   

                                <InputLabel label={"Manutenção"} value={"04, 06, 10"} marginLeft="2rem"
                                />
                            </Flex>

                            <Flex
                                w="full"
                                alignItems="baseline"
                                paddingX="1.3rem"
                                marginTop="3.5rem"
                                >
                                <ButtonExit title={"Voltar"} />
                                <ButtonExit title={"Salvar"} marginLeft="2rem" />
                            </Flex>
                    </Flex>
                </Flex>    
            </Container>
        </Main>
 );
}

export default NewArmarios;