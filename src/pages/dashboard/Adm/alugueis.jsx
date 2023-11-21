/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { Main } from "../../../layout/Main";
import { Container } from "../../../layout/Container";
import { Flex, Text, Spinner, Table } from "@chakra-ui/react";
import PageTitle from "../../../components/PageTitle";
import { InputPesquisa } from "../../../components/Input/Pesquisa";
import { HeadListAprovacao } from "../../../components/Table/Alugueis/Aprovacao/HeadListAprovacao";
import { BodyListAprovacao } from "../../../components/Table/Alugueis/Aprovacao/BodyListAprovacao";
import { HeadListAprovados } from "../../../components/Table/Alugueis/Aprovados/HeadListAprovados";
import { BodyListAprovados } from "../../../components/Table/Alugueis/Aprovados/BodyListAprovados";
import { GetArmarios } from "../../../hook/armarios/useGetArmarios";

export default function Alugueis() {
  const [alugueis, setAlugueis] = useState([]);

  useEffect(() => {
    GetArmarios(setAlugueis);
  }, [alugueis]);

  return (
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
            backgroundColor="white"
            width="full"
            height="150%"
            borderRadius="15px"
            alignItems="flex-start"
            marginTop="1rem"
            direction="column"
            paddingBottom="2rem"
            overflowX="hidden"
            overflowY="hidden"
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

            <Flex w="full" h="full" direction="column" overflowX="hidden" overflowY="hidden">
              {alugueis ? (
                alugueis.length !== 0 ? (
                  <Flex w="full" direction="column" overflowY="auto">
                    <Table >
                      <HeadListAprovacao />

                      {alugueis.map((item, index) => {
                        if (item.statusAluguel === "pendente") {
                          return (
                            <BodyListAprovacao key={index} aprovacao={item} />
                          );
                        }
                      })}
                    </Table>
                  </Flex>
                ) : (
                  <Flex w="full" h="full" justify="center" alignItems="center">
                    <Spinner
                      thickness="4px"
                      speed="0.65s"
                      emptyColor="gray.200"
                      color="blue.500"
                      size="xl"
                    />
                  </Flex>
                )
              ) : (
                <Flex w="full" h="full" justify="center" alignItems="center">
                  <Text
                    fontSize="2rem"
                    textColor="#558085"
                    fontWeight="bold"
                    opacity="0.5"
                  >
                    Sem lista de aprovação
                  </Text>
                </Flex>
              )}
            </Flex>
          </Flex>

          <Flex
            backgroundColor="white"
            width="full"
            height="150%"
            borderRadius="15px"
            alignItems="flex-start"
            marginTop="1.3rem"
            direction="column"
            paddingBottom="2rem"
            overflowX="hidden"
            overflowY="hidden"
          >
            <Text
              fontSize="35px"
              textColor="#558085"
              fontWeight="bold"
              marginLeft="1.3rem"
              marginTop="1.3rem"
            >
              Aluguéis Aprovados
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

            <Flex w="full" h="full" direction="column" overflowX="hidden" overflowY="hidden">
              {alugueis ? (
                alugueis.length !== 0 ? (
                  <Flex w="full" direction="column" overflowY="auto" >
                    <Table>
                      <HeadListAprovados />

                      {alugueis.map((item, index) => {
                        if (item.statusAluguel === "aprovado") {
                          return (
                            <BodyListAprovados key={index} aprovado={item} />
                          );
                        }
                      })}
                    </Table>
                  </Flex>
                ) : (
                  <Flex w="full" h="full" justify="center" alignItems="center">
                    <Spinner
                      thickness="4px"
                      speed="0.65s"
                      emptyColor="gray.200"
                      color="blue.500"
                      size="xl"
                    />
                  </Flex>
                )
              ) : (
                <Flex w="full" h="full" justify="center" alignItems="center">
                  <Text
                    fontSize="2rem"
                    textColor="#558085"
                    fontWeight="bold"
                    opacity="0.5"
                  >
                    Sem de aprovados
                  </Text>
                </Flex>
              )}
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Main>
  );
}
