import { Main } from "../../layout/Main";
import { ContainerLogOff } from "../../layout/Container";
import { Flex, Text, Button } from "@chakra-ui/react";
import { InputLabel } from "../../components/Input/Geral";
import { useNavigate } from "react-router-dom";

export default function EsqueceuSenha() {
  const navigate = useNavigate();

  function sendRoute(route) {
    navigate(route);
  }

  return (
    <Main>
      <ContainerLogOff>
        <Flex
          width="100%"
          height="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Flex
            boxShadow=" 15px 25px 35px rgb(0, 0, 0, .5);"
            backgroundColor="#fff"
            width={{ base: "80%", lg: "508px" }}
            height="auto"
            direction="column"
            padding="2rem"
            alignItems="center"
            marginBottom="30px"
            borderRadius="10px"
          >
            <Text
              color="#558085"
              fontWeight="bold"
              marginBottom="1rem"
              fontSize={{ base: "1.5rem", lg: "1.8rem" }}
            >
              Esqueceu a senha ?
            </Text>

            <Text w={{ base: "100%", lg: "80%" }} align="center">
              Para recuperar seu acesso ao sistema, por favor, informe o e-mail
              cadastrado
            </Text>

            <Flex width="100%" direction="column" marginBottom="10px">
              <InputLabel label={"E-mail"} type="email" />
            </Flex>

            <Button
              height="50px"
              colorScheme="teal"
              boxShadow=" 0 2px 5px rgb(0, 0, 0, .5);"
              width="100%"
              marginY="1.5rem"
              fontWeight="normal"
              onClick={() => sendRoute("/MensagemEmail")}
            >
              Enviar
            </Button>

            <Flex
              justifyContent="center"
              w="full"
              borderTop="2px solid #558085"
              fontSize=".8rem"
              paddingTop="1rem"
              onClick={() => sendRoute("/")}
            >
              <Text color="#558085" fontWeight="bold" cursor="pointer">
                Já possui uma conta ?
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </ContainerLogOff>
    </Main>
  );
}
