import React from "react";
import { Main } from "../../../layout/Main";
import { Container } from "../../../layout/Container";
import { Flex, Text } from "@chakra-ui/react";
import PageTitle from "../../../components/PageTitle";
import { InputLabel } from "../../../components/Input/Geral";
import { ButtonExit } from "../../../components/Button";

function NewUsuarios(){
    return(
            <Main>
                <Container>
                    <Flex
                        width="full"
                        padding="2rem"
                        direction="column"
                        textColor="#558085"
                    >
                        <PageTitle title={"Pessoas > Usuários > Novo"} />

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
                                <ButtonExit title={"Voltar"} />
                                <ButtonExit title={"Salvar"} marginLeft="2rem" />
                                </Flex>

                        </Flex>
                    </Flex>
                </Container>
            </Main>
 );
}

export default NewUsuarios;