/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { Main } from "../../../layout/Main";
import { Container } from "../../../layout/Container";
import { Flex, Text, useToast } from "@chakra-ui/react";
import PageTitle from "../../../components/PageTitle";
import { BoxArmario } from "../../../components/Box/BoxArmario";
import { GetArmarios } from "../../../hook/armarios/useGetArmarios";
import { GetMe } from "../../../hook/alunos/useGetMe";

export function Armarios() {
  const saveEmail = localStorage.getItem("email").replace('"', "");
  const savEmail = saveEmail.replace('"', "");
  const [newData, setNewData] = useState();
  const toast = useToast();

  const [armarios, setArmarios] = useState([]);

  useEffect(() => {
    GetMe(savEmail, setNewData);

    GetArmarios(setArmarios);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [armarios]);

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
              {/* <Text
              fontSize="35px"
              textColor="#558085"
              fontWeight="bold"
              marginLeft="1.3rem"
              marginTop="1.3rem"
            >
              Armários Disponíveis
            </Text> */}

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
                      if (item.curso === newData.curso) {
                        return (
                          <BoxArmario
                            key={index}
                            armario={item}
                            setReserva={setReserva}
                          />
                        );
                      } else {
                        return (
                          <Flex w="full" h="full" justify="center">
                            <Text
                              fontSize={{ base: "1.5rem", lg: "2rem" }}
                              textColor="#558085"
                              fontWeight="bold"
                              opacity="0.5"
                            >
                              Sem armários
                            </Text>
                          </Flex>
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
            </Flex>
          </Flex>
        </Container>
      </Main>
    </>
  );
}
