import React, { useEffect, useState } from "react";
import { Main } from "../../../layout/Main";
import { Container } from "../../../layout/Container";
import { Flex, Text, Spinner } from "@chakra-ui/react";
import PageTitle from "../../../components/PageTitle";
import { ButtonExit } from "../../../components/Button";
import { InputLabel } from "../../../components/Input/Geral";
import { useNavigate } from "react-router-dom";
import { GetMe } from "../../../hook/alunos/useGetMe";

function Perfil() {
  const saveEmail = localStorage.getItem("email").replace('"', "");
  const savEmail = saveEmail.replace('"', "");

  const [newData, setNewData] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    GetMe(savEmail, setNewData);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savEmail]);

  function handleSair() {
    localStorage.removeItem("token");
    localStorage.removeItem("type");
    localStorage.removeItem("email");
    navigate("/");
  }

  return (
    <Main>
      <Container>
        <Flex width="full" padding="2rem" direction="column">
          <PageTitle title={"Perfil"} />

          {newData ? (
            <Flex
              backgroundColor="white"
              width="full"
              height={{ sm: "300px", base: "360px" }}
              borderRadius="15px"
              alignItems="flex-start"
              marginTop="2rem"
              direction="column"
            >
              <Text
                fontSize={{ base: "24px", md: "30px", lg: "30px" }}
                textColor="#558085"
                fontWeight="bold"
                marginLeft="1.3rem"
                marginTop="1rem"
              >
                Configurações da Conta
              </Text>

              <Flex
                w="full"
                paddingX="1.3rem"
                direction={{ base: "column", sm: "row", lg: "row" }}
              >
                <InputLabel label={"Nome"} value={newData.nome} isDisabled />

                <InputLabel
                  label={"Email"}
                  value={newData.email}
                  marginLeft={{ sm: "1.8rem" }}
                  paddingX="1.3rem"
                  w="100%"
                  isDisabled
                />
              </Flex>

              <Flex
                w="full"
                alignItems="baseline"
                paddingX="1.3rem"
                marginTop="2.7rem"
              >
                <ButtonExit
                  title={"Voltar"}
                  onClick={() => navigate("/Adm/Home")}
                />
                <ButtonExit
                  title={"Sair"}
                  marginLeft={{ base: "2rem", sm: "2rem" }}
                  marginTop="1rem"
                  onClick={() => handleSair()}
                />
              </Flex>
            </Flex>
          ) : (
            <Flex
              backgroundColor="white"
              width="full"
              minHeight="380px"
              borderRadius="15px"
              alignItems="center"
              justifyContent="center"
              marginTop="2rem"
              direction="column"
            >
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </Flex>
          )}
        </Flex>
      </Container>
    </Main>
  );
}

export default Perfil;
