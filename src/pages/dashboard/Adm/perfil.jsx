import React from "react";
import { Main } from "../../../layout/Main";
import { Container } from "../../../layout/Container";
import { Flex, Text } from "@chakra-ui/react";
import PageTitle from "../../../components/PageTitle";
import { ButtonExit } from "../../../components/Button";
import { InputLabel } from "../../../components/Input/Geral";
import { useNavigate } from "react-router-dom";

function Perfil() {
  const navigate = useNavigate()

  return (
    <Main>
      <Container>
        <Flex width="full" padding="2rem" direction="column">
          <PageTitle title={"Perfil"} />

          <Flex
            backgroundColor="white"
            width="full"
            height={{sm: "280px", base: "460px"}}
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

            <Flex w="full" paddingX="1.3rem" direction={{base: "column", sm: "row", lg: "row"}}>
              <InputLabel 
              label={"Nome"} 
              value={"John Deo"} />

              <InputLabel
                label={"Email"}
                value={"JohnDeo@gmail.com"}
                marginLeft={{sm: "2rem"}}
              />
            </Flex>

            <Flex
              w="full"
              alignItems="baseline"
              paddingX="1.3rem"
              marginTop="2.7rem"
              direction={{base: "column", sm: "row", lg: "row"}}
            >
              <ButtonExit title={"Voltar"} onClick={() => navigate("/Adm/Home")} />
              <ButtonExit title={"Sair"} marginLeft={{sm: "2rem"}} marginTop="1rem" onClick={() => navigate("/")}/>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Main>
  );
}

export default Perfil;
