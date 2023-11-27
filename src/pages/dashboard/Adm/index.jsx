import React, { useEffect, useState } from "react";
import { Main } from "../../../layout/Main";
import { Container } from "../../../layout/Container";
import { Flex, Text } from "@chakra-ui/react";
import PageTitle from "../../../components/PageTitle";
import { BoxGeral } from "../../../components/Box/BoxGeral";
import { GetArmarios } from "../../../hook/armarios/useGetArmarios";
import { GetAlunos } from "../../../hook/alunos/useGetAlunos";
import { GetUsuarios } from "../../../hook/usuarios/useGetUsuarios";

function Home() {
  const [armarios, setArmarios] = useState([]);
  const [alunos, setAlunos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    GetArmarios(setArmarios);
    GetAlunos(setAlunos);
    GetUsuarios(setUsuarios);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  var countAlunosDesativados = [];

  var countReservados = [];
  var countAlugados = [];
  var countDisponiveis = [];
  var countInativos = [];

  var valorTotalAlugados = 0;
  return (
    <Main>
      <Container>
        {/* Flex central */}
        <Flex width="full" padding="2rem" direction="column">
          <PageTitle title={"Home"} />

          <Flex
            width="full"
            paddingTop="2rem"
            direction={{ sm: "column", base: "column", lg: "row" }}
          >
            <Flex direction="column">
              {/* Flex dos Alunos e Adms*/}
              <Flex
                backgroundColor="white"
                width={{ base: "full", lg: "120%" }}
                height="full"
                borderRadius="15px"
                direction="column"
                padding="16px"
                paddingTop="0.7rem"
                gridTemplateColumns={{
                  sm: "auto",
                  base: "auto",
                  lg: "auto auto",
                }}
                gridColumnGap="1rem"
              >
                <Text
                  fontSize="25px"
                  fontWeight="bold"
                  textColor="#558085"
                  borderBottom="1px"
                  borderBottomColor="#558085"
                >
                  Alunos e Administradores
                </Text>

                <BoxGeral
                  marginTop="1rem"
                  number={usuarios.length}
                  text={"Administradores Cadastrados"}
                  height={{ base: "145px", sm: "130px" }}
                />

                <BoxGeral
                  marginTop="1rem"
                  number={alunos.length}
                  text={"Alunos Cadastrados"}
                  height={{ base: "135px", sm: "130px" }}
                />

                {alunos &&
                  // eslint-disable-next-line array-callback-return
                  alunos.map((item, index) => {
                    if (item.status === "desativado") {
                      countAlunosDesativados.push(item.status);
                      return console.log(countAlunosDesativados);
                    }
                  })}
                <BoxGeral
                  marginTop="16px"
                  number={countAlunosDesativados.length}
                  text={"Alunos Bloqueados"}
                />
              </Flex>
            </Flex>

            {/* Flex com dois Flex, um dos armários e outro financeiro */}
            <Flex
              width={{ base: "full", lg: "75%" }}
              direction="column"
              marginLeft={{ base: "0", lg: "6rem" }}
              marginTop={{ base: "2rem", lg: "0" }}
              marginRight="0"
            >
              {/* Relatório de Armários */}
              <Flex
                backgroundColor="white"
                width="100%"
                borderRadius="15px"
                padding="1rem"
                direction="column"
                paddingTop="0.7rem"
              >
                <Text
                  fontSize="25px"
                  fontWeight="bold"
                  textColor="#558085"
                  borderBottom="1px"
                  borderBottomColor="#558085"
                >
                  Armários
                </Text>

                <Flex
                  backgroundColor="white"
                  width="100%"
                  borderRadius="15px"
                  display="grid"
                  gridTemplateColumns={{
                    sm: "auto",
                    base: "auto",
                    lg: "auto auto",
                  }}
                  gridGap="1rem"
                  paddingTop="1rem"
                >
                  {armarios &&
                    // eslint-disable-next-line array-callback-return
                    armarios.map((item, index) => {
                      if (item.status === "ativado") {
                        countDisponiveis.push(item.status);
                        return console.log(countDisponiveis);
                      } else if (item.status === "pendente") {
                        countReservados.push(item.status);
                        return console.log(countReservados);
                      } else if (
                        item.status === "desativado" ||
                        item.status === "manutenção"
                      ) {
                        countInativos.push(item.status);
                        return console.log(countInativos);
                      } else if (item.statusAluguel === "aprovado") {
                        countAlugados.push(item.status);
                        valorTotalAlugados = countAlugados.length * 50.0;
                        return console.log(countAlugados);
                      }
                    })}

                  <BoxGeral
                    number={countReservados.length}
                    text={"Armários Reservados"}
                  />
                  <BoxGeral
                    number={countAlugados.length}
                    text={"Armarios Alugados"}
                  />
                  <BoxGeral
                    number={countDisponiveis.length}
                    text={"Armários Disponíveis"}
                  />
                  <BoxGeral
                    number={countInativos.length}
                    text={"Armários Inativos"}
                  />
                </Flex>
              </Flex>

              {/* Financeiro */}
              <Flex
                backgroundColor="white"
                width="100%"
                borderRadius="15px"
                padding="1rem"
                direction="column"
                marginTop="10px"
                paddingTop="0.7rem"
              >
                <Text
                  fontSize="25px"
                  fontWeight="bold"
                  textColor="#558085"
                  borderBottom="1px"
                  borderBottomColor="#558085"
                >
                  Painel Financeiro
                </Text>
                <Flex
                  backgroundColor="white"
                  width="100%"
                  borderRadius="15px"
                  display="grid"
                  gridTemplateColumns={{
                    sm: "auto",
                    base: "auto",
                    lg: "auto auto",
                  }}
                  paddingTop="1rem"
                  gridColumnGap="1rem"
                  gridRowGap={{ base: "1rem", lg: "0" }}
                >
                  <BoxGeral
                    number={countReservados.length}
                    text={"Pagamentos Pendentes"}
                    height={{ base: "145px", sm: "130px" }}
                  />
                  <BoxGeral
                    number={`R$${valorTotalAlugados},00`}
                    text={"Valor total"}
                    height={{ base: "135px", sm: "130px" }}
                  />
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Main>
  );
}

export default Home;

/*{/* Flex de notificações }
<Flex
backgroundColor="white"
width={{ base: "full", lg: "30%" }}
direction="column"
borderRadius="15px"
padding="1rem"
>
<Text
  marginTop="10px"
  fontSize="26px"
  textColor="#558085"
  fontWeight="bold"
>
  Notificações
</Text>

<BoxNotificationAlert
  title={"Novo Aluno Cadastrado"}
  subtitle={"RM:12345"}
/>

<BoxNotificationRent
  title={"Novo Armário Reservado"}
  subtitle={"Armário:C20"}
/>

<BoxNotificationPayment
  title={"Aprovação Pendente"}
  subtitle={"Aluno: John Deo"}
/>
</Flex>
*/
