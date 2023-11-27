import React from "react";
import { Main } from "../../../layout/Main";
import { Container } from "../../../layout/Container";
import { Flex, Text } from "@chakra-ui/react";
import { BoxNotificationAlert } from "../../../components/Box/BoxNotification";
import PageTitle from "../../../components/PageTitle";

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
            paddingTop={{ base: "0", lg: "2rem" }}
            direction={{ sm: "column", base: "column", lg: "row" }}
          >
            {/* Flex de notificações */}
            <Flex
              backgroundColor="white.100"
              width={{ base: "full", lg: "50%" }}
              direction="column"
              borderRadius="15px"
              padding="1rem"
              marginTop={{ base: "2rem", lg: "0" }}
              marginRight={{ base: "0", lg: "1rem" }}
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
                title={"Dia 15/12 é a data limite para liberar o armário."}
              />
              {/* <BoxNotificationRent
                title={
                  "Pagamento liberado, você já pode utilizar o armário B18"
                }
              /> */}
              {/* <BoxNotificationPayment
                title={"Você precisa efetuar o pagamento na secretária"}
              /> */}
            </Flex>

            {/* Flex com armairo, notificações e suporte */}
            <Flex
              width={{ base: "full", lg: "full" }}
              direction="column"
              marginTop={{ base: "2rem", lg: "0" }}
            >
              <Flex
                backgroundColor="white.100"
                width="100%"
                borderRadius="15px"
                display="grid"
              >
                <Flex
                  padding="1rem 1rem 0rem 1rem"
                  direction={{ base: "column", lg: "row" }}
                >
                  {/* flex da foto */}
                  {/* <Flex
                    backgroundColor="#BFDDE0"
                    height="380px"
                    borderRadius="15px"
                    width={{ base: "full", lg: "50%" }}
                    direction="column"
                    alignItems="center"
                    justifyContent="space-around"
                  >
                    <Text
                      marginTop="10px"
                      fontSize="26px"
                      textColor="#558085"
                      fontWeight="bold"
                    >
                      Meu Armário
                    </Text>

                    <Image
                      height={{ base: "210px", lg: "243px", xl: "263px" }}
                      width={{ base: "190px", lg: "220px", xl: "245px" }}
                      borderRadius="50%"
                      src="https://www.collegebox.com.br/site/visuais/imagens/aluno_grande_3.jpg"
                      alt="Representação Armário"
                    />

                    <Text textColor="#558085">Armário B19</Text>
                  </Flex> */}

                  {/* flex de informações */}
                  <Flex
                    marginTop={{ base: "1rem", lg: "0" }}
                    backgroundColor="#BFDDE0"
                    height="380px"
                    borderRadius="15px"
                    width="full"
                    direction="column"
                    alignItems="center"
                  >
                    <Text
                      marginTop="10px"
                      fontSize={{ base: "23px", lg: "26px" }}
                      textColor="#558085"
                      fontWeight="bold"
                      textAlign="center"
                    >
                      Informações Adicionais
                    </Text>
                    <Text
                      textColor="#558085"
                      padding="1rem"
                      textAlign="justify"
                      fontSize={{ base: "15px", lg: "22px" }}
                    >
                      A ETEC Irmã Agostina é uma escola técnica
                      profissionalizante que oference ensino médio integrado e
                      cursos técnicos nas áreas de Gestão, Saúde, Indústria e
                      Tecnologia.
                    </Text>
                  </Flex>
                </Flex>

                {/* flex suporte */}
                <Flex
                  backgroundColor="#BFDDE0"
                  height={{ base: "190px", sm: "130px", lg: "130px" }}
                  borderRadius="15px"
                  margin="1rem"
                  direction="column"
                  alignItems="center"
                >
                  <Text
                    marginTop="10px"
                    fontSize="26px"
                    textColor="#558085"
                    fontWeight="bold"
                    textAlign="center"
                  >
                    Fale com o Suporte
                  </Text>
                  <Text
                    textColor="#558085"
                    fontSize="15px"
                    textAlign="center"
                    marginTop={{ base: "15px", sm: "0" }}
                  >
                    Telefone ETECIA: 11 98960-0597
                  </Text>
                  <Text textColor="#558085" fontSize="15px" textAlign="center">
                    E-mail ETECIA: secretaria@etecia.com.br
                  </Text>
                  <Text textColor="#558085" fontSize="15px" textAlign="center">
                    Técnico: 11 96021-0095
                  </Text>
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
