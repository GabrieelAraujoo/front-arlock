import React, { useContext, useEffect, useState } from "react";
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
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../services/firebaseConfig";
import { LockIcon } from "@chakra-ui/icons";
import { CustomerContext } from "../../context/Autenticate";

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

  const auth = getAuth(app);

  const loginData = JSON.parse(localStorage.getItem("loginData"));

  const { submit } = useContext(CustomerContext);

  useEffect(() => {
    if (loginData) {
      setEmail(loginData.email);
      setPassword(loginData.password);
      setRemember.on();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    } else if (name === "senha") {
      setPassword(value);
      setErrorPassword.off();
    }
  }

  function checkLogin() {
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
        status: "warning",
        duration: 5000,
        isClosable: true,
      });

      setLoading.off();

      setErrorEmail.on();
    } else if (email.indexOf("@") === -1 || email.indexOf("@") <= 2) {
      toast({
        title: "Endereço de email invalido.",
        description: "Inclua um endereço de email válido.",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });

      setLoading.off();

      setErrorEmail.on();
    } else if (password === "") {
      toast({
        title: 'Campo "Senha" está vazio',
        status: "warning",
        duration: 5000,
        isClosable: true,
      });

      setLoading.off();

      setErrorPassword.on();
    } else {
      handleSignIn();
    }
  }

  function handleSignIn() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        var type = "";

        if (email === "admin@gmail.com") {
          type = "adm";
        } else type = "aluno";

        const typeLocal = {
          type,
        };

        submit({ email });
        localStorage.setItem("token", JSON.stringify(user.accessToken));
        localStorage.setItem("type", JSON.stringify(typeLocal));
        localStorage.setItem("email", JSON.stringify(email));

        if (type === "adm") {
          navigate("/Adm/Home");
        } else if (type === "aluno") {
          navigate("/Aluno/Home");
        }

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        toast({
          position: "bottom",
          title: "Erro",
          description: "Erro. Tente mais tarde.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });

        setLoading.off();

        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });
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
            <Flex marginBottom="1rem">
              <LockIcon color="#558085" height="70px" width="70px" />

              <Flex
                direction="column"
                alignItems="flex-start"
                marginTop="27px"
                marginLeft="3px"
                marginBottom="1rem"
              >
                <Text fontWeight="bold" textColor="#A3CCB8">
                  ARLOCK
                </Text>
                <Text fontWeight="bold" fontSize="10px">
                  ETECIA
                </Text>
              </Flex>
            </Flex>
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
                name="senha"
                id="password"
                value={password}
                onChange={changeData}
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
              isLoading={loading}
              onClick={() => checkLogin()}
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
