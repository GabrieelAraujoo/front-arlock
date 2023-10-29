import React, { useEffect, useState } from "react";
import { Main } from "../../../layout/Main";
import { Container } from "../../../layout/Container";
import {
  Flex,
  Text,
  IconButton,
  Table,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import PageTitle from "../../../components/PageTitle";
import { InputPesquisa } from "../../../components/Input/Pesquisa";
import { HeadListArmarios } from "../../../components/Table/Armarios/HeadListArmarios";
import { BodyListArmarios } from "../../../components/Table/Armarios/BodyListArmarios";
import { AddIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { GetArmarios } from "../../../hook/armarios/useGetArmarios";

function Armarios() {
  const navigate = useNavigate();

  const [armarios, setArmarios] = useState([]);
  const [deleteArmario, setDeleteArmario] = useState();
  const toast = useToast();

  useEffect(() => {
    GetArmarios(setArmarios);
  }, [armarios]);

  function handleDelete(success) {
    if (deleteArmario === true) {
      toast({
        title: "Excluido",
        description: "Excluido com sucesso",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Erro",
        description: "Erro ao excluir",
        status: "error",
        duration: 9000,
        isClosable: true,
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
            <PageTitle title={"Armários"} />

            <Flex
              backgroundColor="white"
              width="full"
              height="full"
              borderRadius="15px"
              alignItems="flex-start"
              marginTop="1rem"
              direction="column"
              paddingBottom="2rem"
            >
              <Text
                fontSize="35px"
                textColor="#558085"
                fontWeight="bold"
                marginLeft="1.3rem"
                marginTop="1.3rem"
              >
                Lista de Armários
              </Text>

              <Flex
                justify="space-between"
                align="center"
                paddingLeft="20px"
                w="full"
                alignItems="baseline"
              >
                <InputPesquisa />

                <IconButton
                  onClick={() => navigate("/Adm/NovoArmario")}
                  isRound={true}
                  variant="solid"
                  colorScheme="teal"
                  aria-label="Done"
                  fontSize="20px"
                  marginRight="20px"
                  icon={<AddIcon />}
                />
              </Flex>

              <Flex w="full" h="full" direction="column">
                {armarios ? (
                  armarios.length !== 0 ? (
                    <Flex w="full" direction="column" overflowY="auto">
                      <Table>
                        <HeadListArmarios />

                        {armarios.map((item, index) => (
                          <BodyListArmarios
                            key={index}
                            armarios={item}
                            setDeleteArmario={setDeleteArmario}
                          />
                        ))}
                      </Table>
                    </Flex>
                  ) : (
                    <Flex
                      w="full"
                      h="full"
                      justify="center"
                      alignItems="center"
                    >
                      <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="blue.500"
                        size="xl"
                      />
                    </Flex>
                  )
                ) : (
                  <Flex w="full" h="full" justify="center" marginTop="5rem">
                    <Text
                      fontSize="2rem"
                      textColor="#558085"
                      fontWeight="bold"
                      opacity="0.5"
                    >
                      Sem lista de armários
                    </Text>
                  </Flex>
                )}
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </Main>
    </>
  );
}

export default Armarios;
