/* eslint-disable array-callback-return */
import React, { useContext, useEffect, useState } from "react";
import { Main } from "../../../layout/Main";
import { Container } from "../../../layout/Container";
import { Flex, Text, Box } from "@chakra-ui/react";
import PageTitle from "../../../components/PageTitle";
import { BoxArmario } from "../../../components/Box/BoxArmario";
import { GetArmarios } from "../../../hook/armarios/useGetArmarios";
import { GetMe } from "../../../hook/alunos/useGetMe";
import { CustomerContext } from "../../../context/Autenticate";

export function Armarios() {
  const { email } = useContext(CustomerContext);
  const saveEmail = localStorage.getItem("email").replace('"', "");
  const savEmail = saveEmail.replace('"', "");
  const [newData, setNewData] = useState();

  const [armarios, setArmarios] = useState([]);

  useEffect(() => {
    if (email) {
      GetMe(email, setNewData);
    } else {
      GetMe(savEmail, setNewData);
    }

    GetArmarios(setArmarios);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [armarios, email]);

  return (
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
              height="550px"
              borderRadius="15px"
              alignItems="flex-start"
              marginTop="2rem"
              direction="column"
              paddingY="1rem"
            >
              {newData &&
                (newData.status === "ativado" ? (
                  <Flex
                    w="full"
                    direction="column"
                    overflowX={{ base: "scroll", lg: "hidden" }}
                  >
                    {armarios.length !== 0 ? (
                      <Flex
                        width="100%"
                        display="grid"
                        gridTemplateColumns={{
                          base: "auto auto",
                          sm: "auto auto auto auto",
                          md: "auto auto auto auto auto",
                          lg: "auto auto auto auto auto auto auto auto",
                        }}
                        gridGap="0.5rem"
                        padding="1rem"
                      >
                        {armarios.map((item, index, setReserva) => {
                          if (
                            item.rm === newData.rm &&
                            item.statusAluguel === "aprovado"
                          ) {
                            return (
                              <Flex
                                width="130px"
                                height="186px"
                                background="#bfdde0"
                                borderRadius="12px"
                                direction="column"
                                alignItems="center"
                                justifyContent="space-around"
                                backgroundColor="#60E8F8"
                              >
                                <Flex
                                  width="full"
                                  direction="column"
                                  alignItems="center"
                                >
                                  <Box
                                    width="70%"
                                    height="8px"
                                    background="#558085"
                                    borderRadius="10px"
                                    marginBottom=".4rem"
                                  />
                                  <Box
                                    width="70%"
                                    height="8px"
                                    background="#558085"
                                    borderRadius="10px"
                                    marginBottom=".4rem"
                                  />
                                  <Box
                                    width="70%"
                                    height="8px"
                                    background="#558085"
                                    borderRadius="10px"
                                  />
                                </Flex>

                                <Flex width="full" marginLeft="2.2rem">
                                  <Flex
                                    width="20px"
                                    height="20px"
                                    background="#558085"
                                    borderRadius="50%"
                                    justifyContent="center"
                                    alignItems="center"
                                  >
                                    <Box
                                      width="10px"
                                      height="10px"
                                      borderRadius="50%"
                                      background="#D9D9D9"
                                    />
                                  </Flex>
                                </Flex>

                                <Text textColor="#558085" fontSize="13px">
                                  Meu Armário {item.letra} {item.numero}
                                </Text>
                              </Flex>
                            );
                          }
                          if (item.curso === newData.curso) {
                            return (
                              <BoxArmario
                                key={index}
                                armario={item}
                                setReserva={setReserva}
                              />
                            );
                          }
                        })}
                      </Flex>
                    ) : (
                      <Flex w="full" h="full" justify="center">
                        <Text
                          fontSize={{ base: "1.5rem", lg: "2rem" }}
                          textColor="#558085"
                          fontWeight="bold"
                          opacity="0.5"
                        >
                          Sem lista de armários
                        </Text>
                      </Flex>
                    )}
                  </Flex>
                ) : (
                  <Flex w="full" h="full" justify="center">
                    <Text
                      fontSize={{ base: "1.5rem", lg: "2rem" }}
                      textColor="#558085"
                      fontWeight="bold"
                      opacity="0.5"
                    >
                      Conta desativada, por favor, entrar em contato com a
                      secretária
                    </Text>
                  </Flex>
                ))}
            </Flex>
          </Flex>
        </Container>
      </Main>
    </>
  );
}
