import React, { useEffect, useState } from "react";
import { Main } from "../../../layout/Main";
import { Container } from "../../../layout/Container";
import { Flex, Text, IconButton, Table, Spinner } from "@chakra-ui/react";
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

  useEffect(() => {
    GetArmarios(setArmarios);
  }, []);

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
              overflowX={{ base: "scroll", sm: "hidden", lg: "hidden" }}
              overflowY={{ base: "scroll", sm: "hidden", lg: "hidden" }}
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
                {/* componente pesquisa */}
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

              <Flex w="full" direction="column">
                {armarios.length !== 0 ? (
                  <Table>
                    <HeadListArmarios />

                    {armarios.map((item, index) => (
                      <BodyListArmarios key={index} armarios={item} />
                    ))}
                  </Table>
                ) : (
                  <Flex w="full" justify="center" alignItems="center">
                    <Spinner
                      thickness="4px"
                      speed="0.65s"
                      emptyColor="gray.200"
                      color="blue.500"
                      size="xl"
                    />
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
