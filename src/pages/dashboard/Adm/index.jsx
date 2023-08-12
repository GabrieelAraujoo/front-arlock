import React from "react";
import { Main } from "../../../layout/Main";
import { Container } from "../../../layout/Container";
import { Flex, Text } from "@chakra-ui/react";
import {
  BoxNotificationAlert,
  BoxNotificationPayment,
  BoxNotificationRent,
} from "../../../components/Box/BoxNotification";
import PageTitle from "../../../components/PageTitle";
import { BoxGeral } from "../../../components/Box/BoxGeral";

function Home() {
  return (
    <Main>
      <Container>
        {/* Flex central */}
        <Flex width="full" padding="2rem" direction="column">
          <PageTitle title={"Home"} />

          {/* Flex das notificações e do flex dos outros boxes*/}
          <Flex
            width="full"
            paddingTop="2rem"
            direction={{ sm: "column", base: "column", lg: "row" }}
          >
            {/* Flex de notificações */}
            <Flex
              backgroundColor="white.100"
              width={{ base: "full", lg: "30%" }}
              direction="column"
              borderRadius="15px"
              padding="1rem"
            >
              <Text
                marginTop="20px"
                fontSize="26px"
                textColor="#558085"
                fontWeight="bold"
              >
                Notificações
              </Text>

              <BoxNotificationAlert
                title={"Novo Aluno Aprovado"}
                subtitle={"RM:12345"}
              />

              <BoxNotificationRent
                title={"Aluguel Pendente"}
                subtitle={"n° pedido 14"}
              />

              <BoxNotificationPayment
                title={"Pagamento Aprovado"}
                subtitle={"Pedido n°10"}
              />
            </Flex>

            {/* Flex com dois Flex, um dos armários e outro financeiro */}
            <Flex
              width={{ base: "full", lg: "70%" }}
              direction="column"
              marginLeft={{ base: "0", lg: "2rem" }}
              marginTop={{ base: "2rem", lg: "0" }}
            >
              {/* Relatório de Armários */}
              <Flex
                backgroundColor="white.100"
                width="100%"
                borderRadius="15px"
                display="grid"
                gridTemplateColumns={{
                  sm: "auto",
                  base: "auto",
                  lg: "auto auto",
                }}
                gridGap="1rem"
                padding="1rem"
                marginBottom="2rem"
              >
                <BoxGeral number={"00400"} text={"Total de Armários"} />
                <BoxGeral number={"00150"} text={"Armarios Alugados"} />
                <BoxGeral number={"00150"} text={"Armários Disponíveis"} />
                <BoxGeral number={"00100"} text={"Armários Inativos"} />
              </Flex>

              {/* Financeiro */}
              <Flex
                backgroundColor="white.100"
                width="100%"
                borderRadius="15px"
                padding="1rem"
                direction="column"
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
                  backgroundColor="white.100"
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
                  <BoxGeral number={"00020"} text={"Alugueis Pendentes"} />
                  <BoxGeral number={"R$2.000,10"} text={"Valor total"}  />
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
