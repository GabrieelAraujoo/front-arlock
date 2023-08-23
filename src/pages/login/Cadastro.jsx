import React, { useState } from "react";
import { Main } from "../../layout/Main";
import { Container } from "../../layout/Container";
import { Flex, Text, Button, Select } from "@chakra-ui/react";
import { InputLabelIcon } from "../../components/Input/Login";
import { InputLabel } from "../../components/Input/Geral";


export default function Cadastro() {
  const [status, setStatus] = useState(true);

  function changeShowPassword() {
    if (status === true) {
      setStatus(false);
    } else {
      setStatus(true);
    }
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
            width={{ base: "80%", lg: "943px" }}
            height ="60%"
            direction="column"
            padding="2rem"
            alignItems="left"
            marginBottom="30px"
            borderRadius="10px"
          >
            <Text
              color="#558085"
              fontWeight="bold"
              direction = "left"
              marginBottom="1rem"
              fontSize={{ sm: "0.8", md: "1.5rem", lg: "1.8rem" }}
            >
              Cadastre-se
            </Text>
             
             <Flex width="100%" >

            <Flex width="50%" direction="column"   marginBottom="10px">
              <InputLabel label={"Nome"} type="text" placeholder="Nome" />
              <InputLabel label={"RM"} type="number" placeholder="RM" />
              <InputLabelIcon
                label={"Senha"}
                showPassword={changeShowPassword}
                status={status}
                type={status ? "password" : "text"}
                placeholder="Senha"
              />
            </Flex>

            <Flex  width="50%" direction="column"  marginBottom="10px">
              <InputLabel label={"E-mail"} type="email" placeholder="E-mail" />
              <Select borderRadius="10px" padding="1.9rem" height="220%" fontSize="20px" size="100px" label={" curso"} placeholder="Curso" >
              <option value='option1'>Administração</option>
              <option value='option2'>Nutrição</option>
              <option value='option3'>Quimica</option>
              <option value='option4'>Desenvolvimento de Sistemas</option>
              </Select>

              <InputLabelIcon
                label={"Confirmar Senha"}
                showPassword={changeShowPassword}
                status={status}
                type={status ? "password" : "text"}
                placeholder="Senha"
              />
            </Flex>

            </Flex>

            <Flex justifyContent="center">

            <Button
              height="50px"
              colorScheme="teal"
              boxShadow=" 0 2px 5px rgb(0, 0, 0, .5);"
              width="60%"
              marginY="1.5rem"
              fontWeight="normal"
                          >
              Cadastre-se
            </Button>
            </Flex>
            
            <Flex justifyContent="center">
              <Text direction="center" color="#558085" fontWeight="bold" cursor="pointer">
                Voltar
              </Text>
              </Flex>
          </Flex>
        </Flex>
      </Container>
    </Main>
  );
}

