import React, { useState } from "react";
import { Main } from "../../../layout/Main";
import { Container } from "../../../layout/Container";
import { Flex, Text, useToast } from "@chakra-ui/react";
import PageTitle from "../../../components/PageTitle";
import { ButtonExit } from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import {
  baseFormNewUser,
  errorFormNewUser,
} from "../../../utils/baseFormNewUser";
import { validateFormNewUser } from "../../../utils/validateFormNewUser";
import { InputLabel } from "../../../components/Input/Geral";
import axios from "axios";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../../services/firebaseConfig";

function NewUsuarios() {
  const navigate = useNavigate();
  const [formData, setformData] = useState(baseFormNewUser);
  const [error, setError] = useState(errorFormNewUser);
  const toast = useToast();

  const changeValue = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const auth = getAuth(app);

  async function createUser(e) {
    e.preventDefault();

    const errors = await validateFormNewUser(formData, error, setError);

    if (errors.length !== 0) {
      errors.map((erro) => {
        return toast({
          title: `${erro}`,
          status: "warning",
          duration: 5000,
          isClosable: true,
        });
      });
    } else {
      createUserWithEmailAndPassword(auth, formData.email, "Teste@123456")
        .then((userCredential) => {
          const url = "http://localhost/innotech/php/CREATE/Usuarios.php";

          let fData = new FormData();
          fData.append("nome", formData.nome);
          fData.append("email", formData.email);
          fData.append("type", "adm");
          fData.append("senha", "Teste@123456");

          axios
            .post(url, fData)
            .then((Response) => {
              console.log(Response);
            })
            .catch((error) => {
              console.log(error);
            });

          toast({
            position: "bottom",
            title: "Sucesso",
            description: "Usuário criado com sucesso!",
            status: "success",
            duration: 5000,
            isClosable: true,
          });

          setTimeout(() => {
            navigate("/Adm/Usuarios");
          }, "1000");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          toast({
            position: "bottom",
            title: "Erro",
            description: "Erro ao criar user, tente mais tarde.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });

          console.log(errorCode);
          console.log(errorMessage);
        });
    }
  }

  return (
    <>
      <Main>
        <Container>
          <Flex
            width="full"
            padding="2rem"
            direction="column"
            textColor="#558085"
          >
            <PageTitle title={"Usuários > Novo Usuário"} />

            <Flex
              backgroundColor="white"
              width="full"
              height={{ sm: "300px", base: "380px" }}
              borderRadius="15px"
              alignItems="flex-start"
              marginTop="2rem"
              direction="column"
            >
              <Text
                fontSize={{ base: "24px", md: "30px", lg: "30px" }}
                textColor="#558085"
                fontWeight="bold"
                marginLeft="1.3rem"
                marginTop="1rem"
              >
                Criar Novo Usuário
              </Text>

              <form style={{ width: "100%" }} onSubmit={(e) => createUser(e)}>
                <Flex
                  w="full"
                  paddingX="1.3rem"
                  direction={{ base: "column", sm: "row", lg: "row" }}
                >
                  <InputLabel
                    label={"Nome"}
                    name="nome"
                    id="nome"
                    value={formData.nome}
                    onChange={changeValue}
                    isInvalid={error && error.errorNome}
                  />

                  <InputLabel
                    label={"Email"}
                    name="email"
                    id="email"
                    marginLeft={{ sm: "1.9rem" }}
                    value={formData.email}
                    onChange={changeValue}
                    isInvalid={error && error.errorEmail}
                  />
                </Flex>

                <Flex
                  w="full"
                  alignItems="baseline"
                  paddingX="1.3rem"
                  marginTop="3.5rem"
                >
                  <ButtonExit
                    title={"Voltar"}
                    onClick={() => navigate("/Adm/Usuarios")}
                  />
                  <ButtonExit title={"Criar"} marginLeft="2rem" type="submit" />
                </Flex>
              </form>
            </Flex>
          </Flex>
        </Container>
      </Main>
    </>
  );
}

export default NewUsuarios;
