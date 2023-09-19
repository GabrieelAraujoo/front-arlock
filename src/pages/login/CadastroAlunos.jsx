import React, { useState } from "react";
import { Main } from "../../layout/Main";
import { ContainerLogOff } from "../../layout/Container";
import { Flex, Text, Button, useToast } from "@chakra-ui/react";
import { InputLabelIcon } from "../../components/Input/Login";
import { InputLabel } from "../../components/Input/Geral";
import { useNavigate } from "react-router-dom";
import { SelectLabel } from "../../components/Select/SelectCurso";
import { listCursos } from "../../Mock/listCursos";
import {
  baseFormCadastro,
  errorFormCadastro,
} from "../../utils/baseFormCadastro";
import { validateFormCadastro } from "../../utils/validateFormCadastro";

export default function CadastroAlunos() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(true);
  const [confirmShowPassword, setConfirmShowPassword] = useState(true);
  const [userData, setUserData] = useState("");
  const [formData, setformData] = useState(baseFormCadastro);
  const [error, setError] = useState(errorFormCadastro);
  const toast = useToast();

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

  async function createUser() {
    console.log(formData);
    const errors = await validateFormCadastro(formData, error, setError);
    if (errors.length !== 0) {
      toast({
        title: "Erro!",
        status: "error",
        description:
          "Alguns Campos Obrigatórios não foram preenchidos, verefique os campos que estão em vermelho!",
        duration: 5000,
        isClosable: true,
      });
      errors.map((erro) => {
        return toast({
          title: `${erro}`,
          status: "warning",
          duration: 5000,
          isClosable: true,
        });
      });
    } else {
      // const res = await PostUserForm(id, user.token, formData);
      // if (res) {
      navigate("/");
      return toast({
        position: "bottom-right",
        title: "Sucesso",
        description: "Usuário criado com sucesso!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      // } else {
      //   return toast({
      //     title: "Erro",
      //     description: "Algo deu errado! não conseguimos criar usuário",
      //     status: "error",
      //     duration: 5000,
      //     isClosable: true,
      //   });
      // }
    }
  }

  return (
    <Main>
      <ContainerLogOff>
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
                id="nome"
                value={userData.nome}
                onChange={changeValue}
                isInvalid={error && error.errorNome}
              />

              <InputLabel
                label={"Email"}
                name="email"
                id="email"
                value={userData.email}
                onChange={changeValue}
                isInvalid={error && error.errorEmail}
              />
            </Flex>
            <Flex w="full" direction={{ lg: "row", base: "column" }}>
              <InputLabel
                label={"RM"}
                type="number"
                marginRight={{ lg: "2rem", base: "0" }}
                name="rm"
                id="rm"
                value={userData.rm}
                onChange={changeValue}
                isInvalid={error && error.errorRm}
              />

              <SelectLabel
                label={"Curso"}
                options={listCursos}
                name="curso"
                id="curso"
                value={userData.curso}
                onChange={changeValue}
                isInvalid={error && error.errorCurso}
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
                id="senha"
                value={userData.senha}
                onChange={changeValue}
                isInvalid={error && error.errorSenha}
              />

              <InputLabelIcon
                label={"Confirmar Senha"}
                name="confirmarSenha"
                id="confirmarSenha"
                status={confirmShowPassword}
                value={userData.confirmarSenha}
                onChange={changeValue}
                type={confirmShowPassword ? "password" : "text"}
                showPassword={changeShowConfirmPassword}
                isInvalid={error && error.errorConfirmarSenha}
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
                onClick={() => createUser()}
              >
                Cadastre-se
              </Button>

              <Text
                direction="center"
                color="#558085"
                fontWeight="bold"
                cursor="pointer"
                onClick={() => navigate("/")}
              >
                Voltar
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </ContainerLogOff>
    </Main>
  );
}
