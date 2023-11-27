import React, { useState } from "react";
import { Main } from "../../../layout/Main";
import { Container } from "../../../layout/Container";
import { Flex, Text, useToast } from "@chakra-ui/react";
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
import { listOptions } from "../../../Mock/listOptions";

function NewArmarios() {
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
        description: "Armário criado com sucesso!",
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
                fontSize={{ base: "24px", md: "30px", lg: "30px" }}
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
                    type="text"
                    marginRight={{ sm: "1.9rem" }}
                    value={formData.letra}
                    onChange={changeValue}
                    isInvalid={error && error.errorLetra}
                  />

                  <InputLabel
                    label={"Numero"}
                    name="numero"
                    id="numero"
                    type="number"
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

                  <SelectLabel
                    label={"Status"}
                    options={listOptions}
                    name="status"
                    id="status"
                    value={formData.status}
                    placeholder="Status"
                    onChange={changeValue}
                    isInvalid={error && error.errorStatus}
                    mgLeft={{ sm: "1.9rem" }}
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
    </>
  );
}

export default NewArmarios;
