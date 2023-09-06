import React, { useState } from "react";
import { Main } from "../../layout/Main";
import { Container } from "../../layout/Container";
import { Flex, Text, Button, Checkbox } from "@chakra-ui/react";
import { InputLabelIcon } from "../../components/Input/Login";
import { InputLabel } from "../../components/Input/Geral";
import { useNavigate } from "react-router-dom";

function Login() {
  const [status, setStatus] = useState(true);
  const navigate = useNavigate();

  function changeShowPassword() {
    if (status === true) {
      setStatus(false);
    } else {
      setStatus(true);
    }
  }

  function sendRoute(route) {
    navigate(route);
  }

  return (
    <Main>
      <Container>
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
              Seja bem-vindo (a)
            </Text>
            <Flex width="100%" direction="column" marginBottom="10px">
              <InputLabel label={"E-mail"} type="email" name="email" />
              <InputLabelIcon
                label={"Senha"}
                showPassword={changeShowPassword}
                status={status}
                type={status ? "password" : "text"}
                name="email"
              />
            </Flex>
            <Flex
              width="full"
              justifyContent="space-between"
              marginTop=".5rem"
              fontSize={{ base: "11px", md: ".8rem", lg: ".8rem" }}
            >
              <Flex width="50%" direction="row" justifyContent="flex-start">
                <Checkbox w="auto" color="blueblack" defaultChecked />
                <Text marginLeft=".5rem" fontWeight="bold">
                  Lembre-se de mim
                </Text>
              </Flex>

              <Flex
                width="50%"
                direction="row"
                justifyContent="flex-end"
                onClick={() => sendRoute("/EsqueceuSenha")}
              >
                <Text color="#558085" fontWeight="bold" cursor="pointer">
                  Esqueceu a senha?
                </Text>
              </Flex>
            </Flex>

            <Button
              height="50px"
              colorScheme="teal"
              boxShadow=" 0 2px 5px rgb(0, 0, 0, .5);"
              width="100%"
              marginY="1.5rem"
              fontWeight="normal"
              onClick={() => sendRoute("/aluno/home")}
            >
              Entrar
            </Button>

            <Flex
              justifyContent="center"
              w="full"
              borderTop="2px solid #558085"
              fontSize=".8rem"
              paddingTop="1rem"
              onClick={() => sendRoute("/Cadastro")}
            >
              <Text color="#558085" fontWeight="bold" cursor="pointer">
                Ainda não possui uma conta?
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Main>
  );
}

export default Login;
