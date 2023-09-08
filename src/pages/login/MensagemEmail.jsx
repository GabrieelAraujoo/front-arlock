import { Main } from "../../layout/Main";
import { ContainerLogOff } from "../../layout/Container";
import { Flex, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function MensagemEmail() {
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
            borderRadius="10px"
          >
            <Text
              color="#558085"
              fontWeight="bold"
              marginBottom="1rem"
              fontSize={{ base: "1.5rem", lg: "1.8rem" }}
            >
              Olhe o seu email
            </Text>

            <Text w={{ base: "100%", lg: "80%" }} align="center">
              Enviaremos uma mensagem com as instruções de como recuperar o
              acesso ao sistema.
            </Text>

            <Button
              height="50px"
              colorScheme="teal"
              boxShadow=" 0 2px 5px rgb(0, 0, 0, .5);"
              width="100%"
              fontWeight="normal"
              marginTop="1.5rem"
              onClick={() => sendRoute("/")}
            >
              Voltar
            </Button>
          </Flex>
        </Flex>
      </ContainerLogOff>
    </Main>
  );
}
