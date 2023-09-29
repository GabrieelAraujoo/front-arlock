import React, { useEffect, useState } from "react";
import { Main } from "../../../layout/Main";
import { Container } from "../../../layout/Container";
import { Flex, Text, IconButton, Table } from "@chakra-ui/react";
import PageTitle from "../../../components/PageTitle";
import { InputPesquisa } from "../../../components/Input/Pesquisa";
import { HeadListUsuarios } from "../../../components/Table/Usuarios/HeadListUsuarios";
import { BodyListUsuarios } from "../../../components/Table/Usuarios/BodyListUsuarios";
import { AddIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

function Usuarios() {
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Realize a solicitação HTTP para obter a lista de usuários
    fetch("https://testarlock.000webhostapp.com/Api_v1_react/") // Substitua "/api/usuarios" pela URL da sua API
      .then((response) => response.json())
      .then((data) => {
        setUsuarios(data); // Atualiza o estado com os dados dos usuários
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de usuários:", error);
      });
  }, []); // Executa apenas uma vez após a montagem do componente

  return (
    <Main>
      <Container>
        <Flex
          width="full"
          padding="2rem"
          direction="column"
          textColor="#558085"
        >
          <PageTitle title={"Usuários"} />

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
              Lista de Usuários
            </Text>

            <Flex
              justify="space-between"
              align="center"
              paddingLeft="20px"
              w="full"
              alignItems="baseline"
            >
              {/* componente pesquisa */}
              <InputPesquisa />

              <IconButton
                onClick={() => navigate("/Adm/NovoUsuario")}
                isRound={true}
                variant="solid"
                colorScheme="teal"
                aria-label="Done"
                fontSize="20px"
                marginRight="20px"
                icon={<AddIcon />}
              />
            </Flex>

            <Flex w="full" marginTop="3rem" direction="column">
              <Table>
                <HeadListUsuarios />

                {usuarios.map((usuario, index)=> (
                  <BodyListUsuarios key={index} usuario={usuario} />
                ))}
              </Table>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Main>
  );
}

export default Usuarios;
