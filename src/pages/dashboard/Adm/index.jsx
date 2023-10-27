import React from "react";
import { Main } from "../../../layout/Main";
import { Container } from "../../../layout/Container";
import { Flex, Text } from "@chakra-ui/react";
import PageTitle from "../../../components/PageTitle";
import { BoxGeral } from "../../../components/Box/BoxGeral";

function Home() {
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

              <Flex
                direction="column">

                {/* Flex dos Alunos e Adms*/}
                <Flex
                  backgroundColor="white"
                  width="120%"
                  height="full"
                  borderRadius="15px"
                  direction="column"
                  padding="16px"
                  paddingTop="0.7rem"
                  // gridTemplateColumns={{
                  //   sm: "auto",
                  //   base: "auto",
                  //   lg: "auto auto",
                  // }}
                  // gridColumnGap="1rem"
                  // gridRowGap={{ base: "1rem", lg: "0" }}
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
                    number={"5"}
                    text={"Administradores Cadastrados"}
                    height={{ base: "135px", sm: "130px" }}
                  />

                  <BoxGeral
                    marginTop="1rem"
                    number={"300"}
                    text={"Alunos Cadastrados"}
                    height={{ base: "135px", sm: "130px" }}
                  />
                  <BoxGeral
                    marginTop="16px" 
                    number={"50"} 
                    text={"Alunos Bloqueados"} />
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
                          
                  <BoxGeral number={"100"} text={"Armários Reservados"} />
                  <BoxGeral number={"150"} text={"Armarios Alugados"} />
                  <BoxGeral number={"50"} text={"Armários Disponíveis"} />
                  <BoxGeral number={"100"} text={"Armários Inativos"} />
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
                    number={"20"}
                    text={"Pagamentos Pendentes"}
                    height={{ base: "135px", sm: "130px" }}
                  />
                  <BoxGeral number={"R$2.000"} text={"Valor total"} />
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