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
  baseFormNewLocker,
  errorFormNewLocker,
} from "../../../utils/baseFormNewLocker";
import { validateFormNewLocker } from "../../../utils/validateFormNewLocker";
import { SelectLabel } from "../../../components/Select/SelectCurso";
import { listCursos } from "../../../Mock/listCursos";
import { InputLabel } from "../../../components/Input/Geral";
import axios from "axios";

function NewArmarios() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const [formData, setformData] = useState(baseFormNewLocker);
  const [error, setError] = useState(errorFormNewLocker);
  const toast = useToast();

  const changeValue = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  async function handleEnviar(e) {
    e.preventDefault();
    console.log(formData);

    const errors = await validateFormNewLocker(formData, error, setError);

    console.log(errors);

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
      const url = "http://localhost/innotech/php/CREATE/Armario.php";

      const letra = e.target.letra.value.toUpperCase();
      const status = e.target.status.value.toLowerCase();

      let fData = new FormData();
      fData.append("letra", letra);
      fData.append("numero", e.target.numero.value);
      fData.append("curso", e.target.curso.value);
      fData.append("status", status);

      axios
        .post(url, fData)
        .then((Response) => {
          console.log(Response.data);
          console.log("DEU CERTO");
        })
        .catch((error) => {
          console.log(error);
          console.log("DEU RUIM");
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
        navigate("/Adm/Armarios");
      }, "1000");
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
            <PageTitle title={"Armários > Novo Armário"} />

            <Flex
              backgroundColor="white"
              width="full"
              height={{ sm: "330px", base: "510px" }}
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
                Criar Novos Armários
              </Text>

              <form style={{ width: "100%" }} onSubmit={(e) => handleEnviar(e)}>
                <Flex
                  paddingX="1.3rem"
                  direction={{ base: "column", sm: "row", lg: "row" }}
                >
                  <InputLabel
                    label={"Letra"}
                    name="letra"
                    id="letra"
                    marginRight={{ sm: "1.9rem" }}
                    value={formData.letra}
                    onChange={changeValue}
                    isInvalid={error && error.errorLetra}
                  />

                  <InputLabel
                    label={"Numero"}
                    name="numero"
                    id="numero"
                    // type="number"
                    value={formData.numero}
                    onChange={changeValue}
                    isInvalid={error && error.errorNumero}
                  />
                </Flex>

                <Flex
                  w="full"
                  paddingX="1.3rem"
                  direction={{ base: "column", sm: "row", lg: "row" }}
                >
                  <SelectLabel
                    label={"Curso"}
                    options={listCursos}
                    name="curso"
                    id="curso"
                    value={formData.curso}
                    placeholder="Curso"
                    onChange={changeValue}
                    isInvalid={error && error.errorCurso}
                  />

                  <InputLabel
                    label={"Status"}
                    name="status"
                    id="status"
                    marginLeft={{ sm: "1.9rem" }}
                    value={formData.status}
                    onChange={changeValue}
                    isInvalid={error && error.errorStatus}
                  />
                </Flex>

                <Flex
                  w="full"
                  alignItems="baseline"
                  paddingX="1.3rem"
                  marginTop="2.7rem"
                >
                  <ButtonExit
                    title={"Voltar"}
                    onClick={() => navigate("/Adm/Armarios")}
                  />
                  <ButtonExit
                    title={"Salvar"}
                    marginLeft="2rem"
                    type="submit"
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
              Criar Novo Armário?
            </ModalHeader>
            <ModalBody textAlign="center">
              <Text marginBottom="1.1rem" fontSize="14px">
                Ao criar novos armários, você possibilita o aluguel deles pelos
                alunos do curso selecionado.
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
                // onClick={() => createUser()}
              />
            </Flex>
          </ModalContent>
        </Modal>
      </Flex>
    </>
  );
}

export default NewArmarios;
