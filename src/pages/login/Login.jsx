import React, { useEffect, useState } from "react";
import { Main } from "../../layout/Main";
import { ContainerLogOff } from "../../layout/Container";
import {
  Flex,
  Text,
  Button,
  Checkbox,
  useBoolean,
  useToast,
} from "@chakra-ui/react";
import { InputLabelIcon } from "../../components/Input/Login";
import { InputLabel } from "../../components/Input/Geral";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [status, setStatus] = useState(true);
  const navigate = useNavigate();
  const [remember, setRemember] = useBoolean();
  const toast = useToast();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorEmail, setErrorEmail] = useBoolean();
  const [errorPassword, setErrorPassword] = useBoolean();

  const [loading, setLoading] = useBoolean();

  const loginData = JSON.parse(localStorage.getItem("loginData"));

  useEffect(() => {
    if (loginData) {
      setEmail(loginData.email);
      setPassword(loginData.password);
      setRemember.on();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function checkLogin() {
    setLoading.on();

    if (remember) {
      const loginData = {
        email,
        password,
      };

      localStorage.setItem("loginData", JSON.stringify(loginData));
    } else {
      localStorage.removeItem("loginData");
    }

    if (email === "") {
      toast({
        title: 'Campo "E-mail" está vazio',
        status: "info",
        duration: 5000,
        isClosable: true,
      });

      setLoading.off();

      setErrorEmail.on();
    } else if (email.indexOf("@") === -1 || email.indexOf("@") <= 2) {
      toast({
        title: "Endereço de email invalido.",
        description: "Inclua um endereço de email válido.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });

      setLoading.off();

      setErrorEmail.on();
    } else if (password === "") {
      toast({
        title: 'Campo "Senha" está vazio',
        status: "info",
        duration: 5000,
        isClosable: true,
      });

      setLoading.off();

      setErrorPassword.on();
    } else {
      var type = "";

      if (email === "adm@gmail.com") {
        type = "adm";
      } else type = "aluno";

      const typeLocal = {
        type,
      };

      localStorage.setItem("token", JSON.stringify("123456"));
      localStorage.setItem("type", JSON.stringify(typeLocal));

      if (type === "adm") {
        navigate("/Adm/Home");
      } else if (type === "aluno") {
        navigate("/Aluno/Home");
      }
      // const res = await signIn(email, password);

      // if (!res) {
      //   setLoading.off();
      // }
    }
  }

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

  function changeData(e) {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
      setErrorEmail.off();
    } else {
      setPassword(value);
      setErrorPassword.off();
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
              <InputLabel
                erro={errorEmail}
                label={"E-mail"}
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={changeData}
              />
              <InputLabelIcon
                erro={errorPassword}
                label={"Senha"}
                showPassword={changeShowPassword}
                status={status}
                type={status ? "password" : "text"}
                name="password"
                id="password"
                value={password}
                onChange={changeData}
                onKeyUp={(e) => {
                  if (e.keyCode === 13 || e.which === 13) {
                    checkLogin();
                  }
                }}
              />
            </Flex>
            <Flex
              width="full"
              justifyContent="space-between"
              marginTop=".5rem"
              fontSize={{ base: "11px", md: ".8rem", lg: ".8rem" }}
            >
              <Flex width="50%" direction="row" justifyContent="flex-start">
                <Checkbox
                  w="auto"
                  color="blueblack"
                  isChecked={remember}
                  onChange={setRemember.toggle}
                />
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
              // onClick={() => sendRoute("/aluno/home")}
              isLoading={loading}
              type="submit"
              onClick={checkLogin}
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
      </ContainerLogOff>
    </Main>
  );
}
