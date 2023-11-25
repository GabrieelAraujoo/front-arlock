import React, { useState } from "react";
import { Main } from "../../../layout/Main";
import { Container } from "../../../layout/Container";
import {
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
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

function NewUsuarios() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const [formData, setformData] = useState(baseFormNewUser);
  const [error, setError] = useState(errorFormNewUser);
  const toast = useToast();

  const changeValue = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  async function createUser(e) {
    e.preventDefault();

    // const errors = await validateFormNewUser(formData, error, setError);

    // console.log(formData);

    // if (errors.length !== 0) {
      
    //   errors.map((erro) => {
    //     return toast({
    //       title: `${erro}`,
    //       status: "warning",
    //       duration: 5000,
    //       isClosable: true,
    //     });
    //   });
    // } else {
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
    // }
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
                fontSize="35px"
                textColor="#558085"
                fontWeight="bold"
                marginLeft="1.3rem"
                marginTop="1rem"
              >
                Criar Novo Usuário
              </Text>

<form>


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
                <ButtonExit
                  title={"Criar"}
                  marginLeft="2rem"
                  type="submit"
                onClick={(e) => createUser(e)}
                />
              </Flex>
</form>
            </Flex>
          </Flex>
        </Container>
      </Main>

      <Flex>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent
            background="#fff"
            alignItems="center"
            height={{ base: "360px", sm: "330px" }}
            width={{ base: "90%", sm: "90%" }}
            marginY="auto"
          >
            <ModalHeader
              marginBottom="2.3rem"
              fontSize="20px"
              textColor="#558085"
              marginTop="5px"
            >
              Criar Usuário?
            </ModalHeader>
            <ModalBody textAlign="center">
              <Text marginBottom="1.1rem" fontSize="14px">
                Ao criar esse usuário, você possibilita o acesso dele dentro da
                plataforma.
              </Text>
              <Text fontSize="14px">Você realmente deseja criar?</Text>
            </ModalBody>
            <Flex
              marginBottom="1.4rem"
              marginTop={{ base: "10px" }}
              textAlign="center"
              direction={{ base: "column", sm: "row", lg: "row" }}
              justifyContent="center"
              alignItems="center"
            >
              <ButtonExit
                title={"Voltar"}
                marginTop="10px"
                paddingRight={{ base: "195%", sm: "95%" }}
                paddingLeft={{ base: "195%", sm: "95%" }}
                onClick={onClose}
              />
              <ButtonExit
                title={"Criar"}
                marginTop={{ base: "10px" }}
                marginLeft={{ sm: "1rem" }}
                paddingRight={{ base: "195%", sm: "95%" }}
                paddingLeft={{ base: "195%", sm: "95%" }}
                type="submit"
                onClick={() => createUser()}
              />
            </Flex>
          </ModalContent>
        </Modal>
      </Flex>
    </>
  );
}

export default NewUsuarios;
