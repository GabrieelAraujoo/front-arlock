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

  const INPUT_BUSCA = document.getElementById('input-busca'); 
  const TABELA_ALUNO = document.getElementById('tabela-aluno');

  INPUT_BUSCA.addEventListener('keyup', () => {
    let expressao = INPUT_BUSCA.value.toLowerCase()

    if (expressao.length === 1) {
      return
    }

    let linhas = TABELA_ALUNO.getElementsByTagName('Td')
    console.log(linhas);
    for (let posicao in linhas) {
      if (true === isNaN(posicao)) {
        continue
      }

      let conteudoDaLinha = linhas[posicao].innerHTML

      if (true === conteudoDaLinha.includes(expressao)) {
        linhas[posicao].style.display = ''
      } else {
        linhas[posicao].style.display = 'none'
      }
    }
     
  })



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
            backgroundColor="white.100"
            width="full"
            height="full"
            borderRadius="15px"
            alignItems="flex-start"
            marginTop="1rem"
            direction="column"
            overflowX={{ base: "scroll", sm: "hidden" , lg: "hidden" }}
            overflowY={{ base: "scroll", sm: "hidden" , lg: "hidden" }}
          >
            {/*<Text
              fontSize="35px"
              textColor="#558085"
              fontWeight="bold"
              marginLeft="1.3rem"
              marginTop="1.3rem"
            >
              Alunos
            </Text>/*}

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
