import React from "react";
import { Main } from "../../../layout/Main";
import { Container } from "../../../layout/Container";
import { Flex, Text } from "@chakra-ui/react";
import PageTitle from "../../../components/PageTitle";
import { Table } from "@chakra-ui/react";
import { InputPesquisa } from "../../../components/Input/Pesquisa";
import { HeadListAprovacao } from "../../../components/Table/Alugueis/Aprovacao/HeadListAprovacao";
import { BodyListAprovacao } from "../../../components/Table/Alugueis/Aprovacao/BodyListAprovacao";
import { listAprovacao } from "../../../Mock/listAprovacao";
import { HeadListAprovados } from "../../../components/Table/Alugueis/Aprovados/HeadListAprovados";
import { BodyListAprovados } from "../../../components/Table/Alugueis/Aprovados/BodyListAprovados";
import { listAprovados } from "../../../Mock/listAprovados";

function Alugueis() {
  return (
    // aa
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
            height="full"
            borderRadius="15px"
            alignItems="flex-start"
            marginTop="1rem"
            direction="column"
            overflowX={{ base: "scroll", sm: "hidden", lg: "hidden" }}
            overflowY={{ base: "scroll", sm: "hidden", lg: "hidden" }}
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

            <Flex w="full" marginTop="3rem" direction="column" overflowY="auto">
              <Table>
                <HeadListAprovacao />

                {listAprovacao.map((item, index) => (
                  <BodyListAprovacao key={index} aprovacao={item} />
                ))}
              </Table>
            </Flex>
          </Flex>

          <Flex
            backgroundColor="white"
            width="full"
            height="full"
            borderRadius="15px"
            alignItems="flex-start"
            marginTop="1.3rem"
            direction="column"
            overflowX={{ base: "scroll", sm: "hidden", lg: "hidden" }}
            overflowY={{ base: "scroll", sm: "hidden", lg: "hidden" }}
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

            <Flex
              w="full"
              marginTop="3rem"
              direction="column"
              overflowX={{ base: "scroll", lg: "hidden" }}
            >
              <Table>
                <HeadListAprovados />

                {listAprovados.map((item, index) => (
                  <BodyListAprovados key={index} aprovado={item} />
                ))}
              </Table>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Main>
  );
}

export default Alugueis;
