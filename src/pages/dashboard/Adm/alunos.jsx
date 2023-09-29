import React, { useEffect, useState } from "react";
import { Main } from "../../../layout/Main";
import { Container } from "../../../layout/Container";
import { Flex, Text } from "@chakra-ui/react";
import PageTitle from "../../../components/PageTitle";
import { Table } from "@chakra-ui/react";
import { InputPesquisa } from "../../../components/Input/Pesquisa";
import { HeadListAlunos } from "../../../components/Table/Alunos/HeadListAlunos";
import { BodyListAlunos } from "../../../components/Table/Alunos/BodyListAlunos";


function Alunos() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    // Realize a solicitação HTTP para obter a lista de usuários
    fetch("https://testarlock.000webhostapp.com/Api_v1_react/Aluno.php") // Substitua "/api/usuarios" pela URL da sua API
      .then((response) => response.json())
      .then((data) => {
        setAlunos(data); // Atualiza o estado com os dados dos usuários
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de usuários:", error);
      });
  }, []);

  return (
    <Main>
      <Container>
        <Flex
          width="full"
          padding="2rem"
          direction="column"
          textColor="#558085"
        >
          <PageTitle title={"Alunos"} />

          {/* novo */}
          <Flex
            backgroundColor="white"
            width="full"
            height="full"
            borderRadius="15px"
            alignItems="flex-start"
            marginTop="1rem"
            direction="column"
            // overflowX={{ base: "scroll", sm: "hidden", lg: "hidden" }}
            // overflowY={{ base: "scroll", sm: "hidden", lg: "hidden" }}
          >
            <Text
              fontSize="35px"
              textColor="#558085"
              fontWeight="bold"
              marginLeft="1.3rem"
              marginTop="1.3rem"
            >
              Lista de Alunos
            </Text>

            {/* input pesquisa */}
            <Flex
              justify="space-between"
              align="center"
              marginLeft="20px"
              marginTop="15px"
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
                {alunos.map((alunos, index) => (
                  <BodyListAlunos key={index} aluno={alunos} />
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
