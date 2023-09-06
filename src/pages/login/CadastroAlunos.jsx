import React, { useState } from "react";
import { Main } from "../../layout/Main";
import { Container } from "../../layout/Container";
import { Flex, Text, Button } from "@chakra-ui/react";
import { InputLabelIcon } from "../../components/Input/Login";
import Teste, { InputLabel } from "../../components/Input/Geral";
import { useNavigate } from "react-router-dom";
import SelectLabel from "../../components/Select/SelectCurso";
import { listCursos } from "../../Mock/listCursos";

export default function CadastroAlunos() {
  const [showPassword, setShowPassword] = useState(true);
  const [confirmShowPassword, setConfirmShowPassword] = useState(true);
  const navigate = useNavigate();

  function changeShowPassword() {
    if (showPassword === true) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  }

  function changeShowConfirmPassword() {
    if (confirmShowPassword === true) {
      setConfirmShowPassword(false);
    } else {
      setConfirmShowPassword(true);
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
          paddingY={{ base: "5rem", lg: "0" }}
        >
          <Flex
            boxShadow=" 15px 25px 35px rgb(0, 0, 0, .5);"
            backgroundColor="#fff"
            width={{ base: "80%", lg: "943px" }}
            height="auto"
            direction="column"
            padding="2rem"
            alignItems="left"
            borderRadius="10px"
          >
            <Text
              color="#558085"
              fontWeight="bold"
              direction="left"
              marginBottom="1rem"
              fontSize={{ base: "1.5rem", lg: "1.8rem" }}
            >
              Cadastre-se
            </Text>

            <Flex w="full" direction={{ lg: "row", base: "column" }}>
              {/* <InputLabel label={"Nome"} placeholder={"John Deo"} /> */}
              <Teste label={"Nome"}/>

              {/* <InputLabel */}
              <Teste 
                label={"Email"}
                marginLeft={{ lg: "2rem", base: "0" }}
                
              />
            </Flex>
            <Flex w="full" direction={{ lg: "row", base: "column" }}>
              <Teste label={"RM"}  type="number" />
              
              <SelectLabel
              placeholder=" "
                label={"Curso"}
                options={listCursos}
                ml={{ lg: "3rem", base: "0" }}
              />
            </Flex>

            <Flex  w="full" direction={{ lg: "row", base: "column" }}>
              <Teste
                label={"Senha"}
                showPassword={changeShowPassword}
                status={showPassword}
                type={showPassword ? "password" : "text"}
                
              />

             <Flex ml={{ lg: "3rem", base: "0" }} w="full" direction={{ lg: "row", base: "column" }}>
              <Teste  label={"Confirmar Senha"} status={confirmShowPassword} type={confirmShowPassword ? "password" : "text"} showPassword={changeShowPassword} />

        
            </Flex>
            </Flex>
            

            <Flex
              w="full"
              direction="column"
              justifyContent="center"
              alignItems="center"
              marginTop="1.5rem"
            >
              <Button
                height="50px"
                colorScheme="teal"
                boxShadow=" 0 2px 5px rgb(0, 0, 0, .5);"
                width="60%"
                marginY="1.5rem"
                fontWeight="normal"
                onClick={() => sendRoute("/")}
              >
                Cadastre-se
              </Button>

              <Text
                direction="center"
                color="#558085"
                fontWeight="bold"
                cursor="pointer"
                onClick={() => sendRoute("/")}
              >
                Voltar
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Main>
  );
}
