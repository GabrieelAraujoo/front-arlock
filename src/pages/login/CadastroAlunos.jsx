import React, { useState } from "react";
import { Main } from "../../layout/Main";
import { Container } from "../../layout/Container";
import { Flex, Text, Button } from "@chakra-ui/react";
import { InputLabelIcon } from "../../components/Input/Login";
import { InputLabel } from "../../components/Input/Geral";
import { useNavigate } from "react-router-dom";
import { SelectLabel } from "../../components/Select/SelectCurso";
import { listCursos } from "../../Mock/listCursos";
import { baseFormCadastro } from "../../utils/baseFormCadastro";

export default function CadastroAlunos() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(true);
  const [confirmShowPassword, setConfirmShowPassword] = useState(true);
  const [userData, setUserData] = useState("");
  const [formData, setformData] = useState(baseFormCadastro);

  const changeValue = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    setformData(userData);
  };

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

  function sendUser() {
    console.log(formData);
    navigate("/");
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
              fontSize={{ base: "1.5rem", lg: "1.8rem" }}
            >
              Cadastre-se
            </Text>

            <Flex w="full" direction={{ lg: "row", base: "column" }}>
              <InputLabel
                label={"Nome"}
                marginRight={{ lg: "2rem", base: "0" }}
                name="nome"
                value={userData.nome}
                onChange={changeValue}
                // isInvalid={error && error.errorName}
              />

              <InputLabel
                label={"Email"}
                name="email"
                value={userData.email}
                onChange={changeValue}
              />
            </Flex>
            <Flex w="full" direction={{ lg: "row", base: "column" }}>
              <InputLabel
                label={"RM"}
                type="number"
                marginRight={{ lg: "2rem", base: "0" }}
                name="rm"
                value={userData.rm}
                onChange={changeValue}
              />

              <SelectLabel
                label={"Curso"}
                options={listCursos}
                name="curso"
                value={userData.curso}
                onChange={changeValue}
              />
            </Flex>

            <Flex w="full" direction={{ lg: "row", base: "column" }}>
              <InputLabelIcon
                label={"Senha"}
                showPassword={changeShowPassword}
                status={showPassword}
                type={showPassword ? "password" : "text"}
                marginRight={{ lg: "2rem", base: "0" }}
                name="senha"
                value={userData.senha}
                onChange={changeValue}
              />

              <InputLabelIcon
                label={"Confirmar Senha"}
                status={confirmShowPassword}
                type={confirmShowPassword ? "password" : "text"}
                showPassword={changeShowConfirmPassword}
              />
            </Flex>

            <Flex
              w="full"
              direction="column"
              justifyContent="space-between"
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
                onClick={() => sendUser()}
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
