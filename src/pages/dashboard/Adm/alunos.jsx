import React from "react";
import { Main } from "../../../layout/Main";
import { Container } from "../../../layout/Container";
import { Flex, Text } from "@chakra-ui/react";
import PageTitle from "../../../components/PageTitle";
import { Table } from "@chakra-ui/react";
import { InputPesquisa } from "../../../components/Input/Pesquisa";
import { HeadListAlunos } from "../../../components/Table/Alunos/HeadListAlunos";
import { BodyListAlunos } from "../../../components/Table/Alunos/BodyListAlunos";
import { listAlunos } from "../../../Mock/listAlunos";

function Alunos() {
  return (
    <Main>
      <Container>
        <Flex
          width="full"
          padding="2rem"
          direction="column"
          textColor="#558085"
        >
          <PageTitle title={"Pessoas > Alunos"} />

          {/* novo */}
          <Flex
            backgroundColor="white.100"
            width="full"
            height="470px"
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
              Alunos
            </Text>

            {/* input pesquisa */}
            <Flex
              justify="space-between"
              align="center"
              marginLeft="20px"
              w="full"
            >
              {/* componente pesquisa */}
              <InputPesquisa />
            </Flex>

            <Flex
              w="full"
              marginTop="3rem"
              direction="column"
              overflowX={{ base: "scroll", lg: "hidden" }}
            >
              <Table>
                {/* titulo tabela */}
                <HeadListAlunos />

                {/* corpo tabela com pegando lista de alunos */}
                {listAlunos.map((item, index) => (
                  <BodyListAlunos key={index} aluno={item} />
                ))}
              </Table>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Main>
  );
}

export default Alunos;
