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
        <Flex width="full" padding="2rem" direction="column">
          <PageTitle title={"Home"} />
          <Flex width="full">
            {/* Flex de notificações */}
            <Flex
              backgroundColor="white.100"
              width="30%"
              height="550px"
              direction="column"
              borderRadius="15px"
              marginTop="2rem"
            >
              <Text
                marginLeft="20px"
                marginTop="20px"
                fontSize="26px"
                textColor="#558085"
                fontWeight="bold"
              >
                Notificações
              </Text>

              <BoxNotificationAlert
                title={"Teste Titulo"}
                subtitle={"Teste Subtitle"}
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
              width="full"
              justifyContent="flex-end"
              paddingLeft="2rem"
              paddingTop="2rem"
            >
              <Flex
                backgroundColor="white.100"
                width="100%"
                height="41%"
                borderRadius="15px"
              >
                <BoxGeral />
                <BoxGeral />
                <BoxGeral />
                <BoxGeral />
                {/* Primeiro Flex - armários */}
                {/* <Flex direction="column">
                  <Flex
                    backgroundColor="#BFDDE0"
                    width="355px"
                    height="144px"
                    borderRadius="15px"
                    margin="15px"
                  >
                    <Flex marginLeft="20px" marginTop="10px" direction="column">
                      <Text
                        fontSize="48px"
                        textColor="#558085"
                        fontWeight="bold"
                      >
                        00400
                      </Text>

                      <Text
                        textColor="#558085"
                        fontWeight="bold"
                        fontSize="20px"
                      >
                        Total de Armários
                      </Text>
                    </Flex>
                  </Flex>

                  <Flex
                    backgroundColor="#BFDDE0"
                    width="355px"
                    height="144px"
                    borderRadius="15px"
                    margin="15px"
                    direction="column"
                  >
                    <Flex marginLeft="20px" marginTop="10px" direction="column">
                      <Text
                        fontSize="48px"
                        textColor="#558085"
                        fontWeight="bold"
                      >
                        00150
                      </Text>

                      <Text
                        textColor="#558085"
                        fontWeight="bold"
                        fontSize="20px"
                      >
                        Armarios Alugados
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>

                <Flex direction="column">
                  <Flex
                    backgroundColor="#BFDDE0"
                    width="355px"
                    height="144px"
                    borderRadius="15px"
                    margin="15px"
                    direction="column"
                  >
                    <Flex marginLeft="20px" marginTop="10px" direction="column">
                      <Text
                        fontSize="48px"
                        textColor="#558085"
                        fontWeight="bold"
                      >
                        00150
                      </Text>

                      <Text
                        textColor="#558085"
                        fontWeight="bold"
                        fontSize="20px"
                      >
                        Armários Disponíveis
                      </Text>
                    </Flex>
                  </Flex>

                  <Flex
                    backgroundColor="#BFDDE0"
                    width="355px"
                    height="144px"
                    borderRadius="12px"
                    margin="15px"
                    direction="column"
                  >
                    <Flex marginLeft="20px" marginTop="10px" direction="column">
                      <Text
                        fontSize="48px"
                        textColor="#558085"
                        fontWeight="bold"
                      >
                        00100
                      </Text>

                      <Text
                        textColor="#558085"
                        fontWeight="bold"
                        fontSize="20px"
                      >
                        Armários Inativos
                      </Text>
                    </Flex>
                  </Flex>
                </Flex> */}
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        {/* <Flex
          backgroundColor="white.100"
          width="52%"
          height="35%"
          borderRadius="15px"
          marginLeft="-777px"
          marginTop="420px"
          direction="column"
        >
          <Text
            marginLeft="15px"
            marginTop="15px"
            fontSize="25px"
            fontWeight="bold"
            textColor="#558085"
            borderBottom="1px"
            borderBottomColor="#558085"
          >
            Painel Financeiro
          </Text>

          <Flex alignItems="baseline">
            <Flex
              backgroundColor="#BFDDE0"
              width="355px"
              height="144px"
              borderRadius="15px"
              margin="15px"
            >
              <Flex marginLeft="20px" marginTop="20px" direction="column">
                <Text fontSize="48px" textColor="#558085" fontWeight="bold">
                  R$2.000,10
                </Text>

                <Text textColor="#558085" fontWeight="bold" fontSize="20px">
                  Valor total
                </Text>
              </Flex>
            </Flex>

            <Flex
              backgroundColor="#BFDDE0"
              width="345px"
              height="144px"
              borderRadius="15px"
              margin="15px"
            >
              <Flex
                marginLeft="20px"
                marginTop="20px"
                direction="column"
                fontWeight="bold"
              >
                <Text fontSize="48px" textColor="#558085" fontWeight="bold">
                  00020
                </Text>

                <Text textColor="#558085" fontSize="20px">
                  Alugueis Pendentes
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex> */}
      </Container>
    </Main>
  );
}

export default Home;
