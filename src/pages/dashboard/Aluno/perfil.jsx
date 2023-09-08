import React from "react";
import { Main } from "../../../layout/Main";
import { Container } from "../../../layout/Container";
import { Flex, Text } from "@chakra-ui/react";
import PageTitle from "../../../components/PageTitle";
import { ButtonExit } from "../../../components/Button";
import { InputLabel } from "../../../components/Input/Geral";
import { useNavigate } from "react-router-dom";

function Perfil() {
  const navigate = useNavigate();

  function handleSair() {
    localStorage.removeItem("token");
    localStorage.removeItem("type");
    navigate("/");
  }

  return (
    <Main>
      <Container>
        <Flex width="full" padding="2rem" direction="column">
          <PageTitle title={"Perfil"} />

          <Flex
            backgroundColor="white.100"
            width="full"
            minHeight="380px"
            borderRadius="15px"
            alignItems="flex-start"
            marginTop="2rem"
            direction="column"
          >
            <Text
              fontSize="35px"
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
                value={"John Deo"}
                marginRight={{ lg: "2rem", base: "0" }}
              />

              <InputLabel label={"Email"} value={"JohnDeo@gmail.com"} />
            </Flex>

            <Flex
              w="full"
              paddingX="1.3rem"
              direction={{ lg: "row", base: "column" }}
            >
              <InputLabel
                label={"RM"}
                value={"11225"}
                marginRight={{ lg: "2rem", base: "0" }}
              />

              <InputLabel
                label={"Curso"}
                value={"Desenvolvimento de Sistemas"}
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
        </Flex>
      </Container>
    </Main>
  );
}

export default Perfil;
