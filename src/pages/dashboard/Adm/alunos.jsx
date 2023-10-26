import React from "react";
import { Main } from "../../../layout/Main";
import { Container } from "../../../layout/Container";
import { Flex, Text, Spinner, Button } from "@chakra-ui/react";
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

  function teste() {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rm: "12345",
        nome: "Gene",
        curso: "Desenvolvimento de Sistemas",
        email: "adm@gmail.com",
        senha: "123456",
        type: "adm",
      }),
    };
    fetch(
      "https://naovai.000webhostapp.com/php/Api/api.php?arlock=createAluno",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Atualiza o estado com os dados dos usuários
      })
      .catch((error) => {
        console.error("Erro alunos:", error);
      });
  }

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
              paddingLeft="20px"
              w="full"
              alignItems="baseline"
            >
              {/* componente pesquisa */}
              <InputPesquisa />
            </Flex>

            {/* corpo tabela com pegando lista de alunos */}
            {alunos.length !== 0 ? (
              <Flex
                w="full"
                direction="column"
                overflowX={{ base: "scroll", lg: "hidden" }}
              >
                <Table>
                  {/* titulo tabela */}
                  <HeadListAlunos />

                  {alunos.map((item, index) => (
                    <BodyListAlunos key={index} aluno={item} />
                  ))}
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
            )}
            <Button
              w="50px"
              colorScheme="teal"
              variant="outline"
              height="45px"
              alignItems="center"
              justifyContent="center"
              onClick={() => teste()}
            >
              teste
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Main>
  );
}

export default Alunos;
