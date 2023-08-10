import React from "react";
import { Main } from "../../../layout/Main";
import { Container } from "../../../layout/Container";
import { Flex, Menu, Text } from "@chakra-ui/react";
import { LockIcon, BellIcon, UnlockIcon, CheckIcon } from '@chakra-ui/icons';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'
import { BoxNotificationAlert, BoxNotificationPayment, BoxNotificationRent } from "../../../components/Box/BoxNotification";
import PageTitle from "../../../components/PageTitle";
import MenuLateral from "../../../components/Menu/MenuLateral";


function Home() {
  return (
    <Main>
      <Container>

        <PageTitle title={"Home"}/>

        <Flex backgroundColor="white.100" width="334px" height="600px" direction="column" marginTop="90px"
              marginLeft="-1160px" borderRadius="15px">

                <Text marginLeft="20px" marginTop="20px"  fontSize="26px" textColor="#558085" fontWeight="bold" >
                  Notificações
                </Text>

                <BoxNotificationAlert title={"Teste Titulo"} subtitle={"Teste Subtitle"}/>

                <BoxNotificationRent title={"Aluguel Pendente"} subtitle={"n° pedido 14"}/>

                <BoxNotificationPayment title={"Pagamento Aprovado"} subtitle={"Pedido n°10"}/>

        </Flex>

        <Flex backgroundColor="white.100" width="52%" height="41%" borderRadius="15px" marginLeft="49px" marginTop="-200px">

                <Flex direction="column">

                <Flex backgroundColor="#BFDDE0" width="355px" height="144px" borderRadius="15px" margin="15px">

                        <Flex marginLeft="20px" marginTop="10px" direction="column">

                          <Text fontSize="48px" textColor="#558085" fontWeight="bold">
                            00400
                          </Text>

                          <Text textColor="#558085" fontWeight="bold" fontSize="20px">
                            Total de Armários
                          </Text>

                        </Flex>

                </Flex>

                <Flex backgroundColor="#BFDDE0" width="355px" height="144px" borderRadius="15px" margin="15px" direction="column">

                          <Flex marginLeft="20px" marginTop="10px" direction="column">

                          <Text fontSize="48px" textColor="#558085" fontWeight="bold">
                            00150
                          </Text>

                          <Text textColor="#558085" fontWeight="bold" fontSize="20px">
                            Armarios Alugados
                          </Text>

                          </Flex>

                </Flex>

                </Flex>

                <Flex direction="column">

                <Flex backgroundColor="#BFDDE0" width="355px" height="144px" borderRadius="15px" margin="15px" direction="column">

                          <Flex marginLeft="20px" marginTop="10px" direction="column">

                          <Text fontSize="48px" textColor="#558085" fontWeight="bold">
                            00150
                          </Text>

                          <Text textColor="#558085" fontWeight="bold" fontSize="20px">
                            Armários Disponíveis
                          </Text>

                          </Flex>

                </Flex>

                <Flex backgroundColor="#BFDDE0" width="355px" height="144px" borderRadius="12px" margin="15px" direction="column">

                          <Flex marginLeft="20px" marginTop="10px" direction="column">

                          <Text fontSize="48px" textColor="#558085" fontWeight="bold">
                            00100
                          </Text>

                          <Text textColor="#558085" fontWeight="bold" fontSize="20px">
                            Armários Inativos
                          </Text>

                          </Flex>

                </Flex>

                </Flex>

        </Flex>

        <Flex backgroundColor="white.100" width="52%" height="35%" borderRadius="15px" marginLeft="-777px" marginTop="420px"
              direction="column">

                <Text marginLeft="15px" marginTop="15px" fontSize="25px" fontWeight="bold" textColor="#558085"
                borderBottom="1px" borderBottomColor="#558085">
                  Painel Financeiro
                </Text>

              <Flex alignItems="baseline">

                <Flex backgroundColor="#BFDDE0" width="355px" height="144px" borderRadius="15px" margin="15px">

                          <Flex marginLeft="20px" marginTop="20px" direction="column">

                          <Text fontSize="48px" textColor="#558085" fontWeight="bold">
                            R$2.000,10
                          </Text>

                          <Text textColor="#558085" fontWeight="bold" fontSize="20px">
                            Valor total
                          </Text>

                          </Flex>

                </Flex>

                <Flex backgroundColor="#BFDDE0" width="345px" height="144px" borderRadius="15px" margin="15px">

                          <Flex marginLeft="20px" marginTop="20px" direction="column" fontWeight="bold">

                          <Text fontSize="48px" textColor="#558085" fontWeight="bold">
                            00020
                          </Text>

                          <Text textColor="#558085" fontSize="20px">
                            Alugueis Pendentes
                          </Text>

                          </Flex>

                </Flex>

                </Flex>

        </Flex>
      </Container>
    </Main>
  );
}

export default Home;
