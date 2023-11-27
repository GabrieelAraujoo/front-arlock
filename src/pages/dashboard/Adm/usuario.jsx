import React, { useState, useEffect } from "react";
import { Main } from "../../../layout/Main";
import { Container } from "../../../layout/Container";
import { Flex, Text, IconButton, Table } from "@chakra-ui/react";
import PageTitle from "../../../components/PageTitle";
import { InputPesquisa } from "../../../components/Input/Pesquisa";
import { HeadListUsuarios } from "../../../components/Table/Usuarios/HeadListUsuarios";
import { BodyListUsuarios } from "../../../components/Table/Usuarios/BodyListUsuarios";
import { AddIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { GetUsuarios } from "../../../hook/usuarios/useGetUsuarios";

function Usuarios() {
  const navigate = useNavigate();

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    GetUsuarios(setUsuarios);
  }, [usuarios]);

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
            paddingBottom="2rem"
          >
            <Text
              fontSize={{ base: "24px", md: "30px", lg: "30px" }}
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
              <InputPesquisa placeholder={"Pesquisa por nome"} />

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
            {usuarios.length !== 0 ? (
              <Flex w="full" direction="column" overflowY="auto">
                <Table>
                  <HeadListUsuarios />

                  {usuarios.map((item, index) => (
                    <BodyListUsuarios key={index} usuario={item} />
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
                  Sem lista de usuários
                </Text>
              </Flex>
            )}
          </Flex>
        </Flex>
      </Container>
    </Main>
  );
}

export default Usuarios;
