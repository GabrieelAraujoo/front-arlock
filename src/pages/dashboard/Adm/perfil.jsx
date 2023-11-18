import React, { useContext, useEffect } from "react";
import { Main } from "../../../layout/Main";
import { Container } from "../../../layout/Container";
import { Flex, Text } from "@chakra-ui/react";
import PageTitle from "../../../components/PageTitle";
import { ButtonExit } from "../../../components/Button";
import { InputLabel } from "../../../components/Input/Geral";
import { useNavigate } from "react-router-dom";
import { CustomerContext } from "../../../context/Autenticate";

function Perfil() {
  const { email } = useContext(CustomerContext);
  const navigate = useNavigate();

  useEffect(() => {
    handlePerfil();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);

  function handlePerfil() {
    fetch(`https://naovai.000webhostapp.com/php/PUT/Aluno.php?email=${email}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data;
      })

      .catch((error) => {
        console.error(error);

        return error;
      });
  }

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
            backgroundColor="white"
            width="full"
            height={{ sm: "300px", base: "360px" }}
            borderRadius="15px"
            alignItems="flex-start"
            marginTop="2rem"
            direction="column"
          >
            <Text
              fontSize={{ lg: "35px", md: "35px", base: "25px" }}
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
              <InputLabel label={"Nome"} value={"John Deo"} />

              <InputLabel
                label={"Email"}
                value={"JohnDeo@gmail.com"}
                marginLeft={{ sm: "1.8rem" }}
                paddingX="1.3rem"
                w="100%"
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
        </Flex>
      </Container>
    </Main>
  );
}

export default Perfil;
