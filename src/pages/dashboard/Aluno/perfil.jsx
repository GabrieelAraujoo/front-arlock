import React, { useContext, useEffect, useState } from "react";
import { Main } from "../../../layout/Main";
import { Container } from "../../../layout/Container";
import { Flex, Text, Spinner } from "@chakra-ui/react";
import PageTitle from "../../../components/PageTitle";
import { ButtonExit } from "../../../components/Button";
import { InputLabel } from "../../../components/Input/Geral";
import { useNavigate } from "react-router-dom";
import { CustomerContext } from "../../../context/Autenticate";
import { GetMe } from "../../../hook/alunos/useGetMe";

function Perfil() {
  const { email } = useContext(CustomerContext);
  const [newData, setNewData] = useState();
  const navigate = useNavigate();

  const saveEmail = localStorage.getItem("email").replace('"', "");
  const savEmail = saveEmail.replace('"', "");

  useEffect(() => {
    if (email) {
      GetMe(email, setNewData);
    } else {
      GetMe(savEmail, setNewData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);

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
              minHeight="380px"
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
                direction={{ lg: "row", base: "column" }}
              >
                <InputLabel
                  label={"Nome"}
                  value={newData.nome}
                  name="nome"
                  id="nome"
                  marginRight={{ lg: "2rem", base: "0" }}
                  isDisabled
                />

                <InputLabel
                  label={"Email"}
                  name="email"
                  id="email"
                  value={newData.email}
                  isDisabled
                />
              </Flex>

              <Flex
                w="full"
                paddingX="1.3rem"
                direction={{ lg: "row", base: "column" }}
              >
                <InputLabel
                  name="rm"
                  id="rm"
                  label={"RM"}
                  value={newData.rm}
                  marginRight={{ lg: "2rem", base: "0" }}
                  isDisabled
                />

                <InputLabel
                  name="curso"
                  id="curso"
                  label={"Curso"}
                  value={newData.curso}
                  isDisabled
                />
              </Flex>

              <Flex
                w="full"
                alignItems="baseline"
                paddingX="1.3rem"
                marginTop="3.5rem"
                marginBottom={{ base: "1rem", lg: "0" }}
              >
                <ButtonExit
                  title={"Voltar"}
                  onClick={() => navigate("/Aluno/Home")}
                />
                <ButtonExit
                  title={"Sair"}
                  marginLeft="2rem"
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
