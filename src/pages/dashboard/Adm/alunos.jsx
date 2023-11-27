import React from "react";
import { Main } from "../../../layout/Main";
import { Container } from "../../../layout/Container";
import { Flex, Text } from "@chakra-ui/react";
import PageTitle from "../../../components/PageTitle";
import { Table } from "@chakra-ui/react";
import { InputPesquisa } from "../../../components/Input/Pesquisa";
import { HeadListAlunos } from "../../../components/Table/Alunos/HeadListAlunos";
import { BodyListAlunos } from "../../../components/Table/Alunos/BodyListAlunos";
import { useEffect, useState } from "react";
import { GetAlunos } from "../../../hook/alunos/useGetAlunos";

function Alunos() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    GetAlunos(setAlunos);
  }, [alunos]);

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
            <PageTitle title={"Alunos"} />

            <Flex
              backgroundColor="white"
              width="full"
              height="full"
              borderRadius="15px"
              alignItems="flex-start"
              marginTop="1rem"
              direction="column"
              paddingBottom="2rem"
            >
              <Text
                fontSize={{ base: "24px", md: "30px", lg: "30px" }}
                textColor="#558085"
                fontWeight="bold"
                marginLeft="1.3rem"
                marginTop="1.3rem"
              >
                Lista de Alunos
              </Text>

              <Flex
                justify="space-between"
                align="center"
                paddingLeft="20px"
                w="full"
                alignItems="baseline"
              >
                <InputPesquisa placeholder={"Pesquisa por rm"} />
              </Flex>

              <Flex w="full" h="full" direction="column">
                {alunos.length !== 0 ? (
                  <Flex w="full" direction="column" overflowY="auto">
                    <Table>
                      {/* titulo tabela */}
                      <HeadListAlunos />

                      {alunos.map((item, index) => (
                        <BodyListAlunos key={index} aluno={item} />
                      ))}
                    </Table>
                  </Flex>
                ) : (
                  <Flex w="full" h="full" justify="center" marginTop="5rem">
                    <Text
                      fontSize="2rem"
                      textColor="#558085"
                      fontWeight="bold"
                      opacity="0.5"
                    >
                      Sem lista de alunos
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

export default Alunos;
