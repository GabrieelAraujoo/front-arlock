<<<<<<< HEAD
import React from "react";
import { Main } from "../../../layout/Main";
import { Container } from "../../../layout/Container";
import { Flex, Text } from "@chakra-ui/react";
import { LockIcon, BellIcon, UnlockIcon, CheckIcon } from '@chakra-ui/icons';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'

function Home() {
  return (
    <Main>
      <Container>
        <Flex backgroundColor="white.100" width="14%" height="full" direction="column" alignItems="center">

          <Flex marginTop="35px">

          <LockIcon color="#558085" height="70px" width="70px" />

          <Flex direction="column" alignItems="flex-start" marginTop="25px" marginLeft="5px">

          <Text fontWeight="bold" textColor="#A3CCB8"> ARLOCK </Text>
          <Text fontWeight="bold" fontSize="10px"> ETECIA </Text>

          </Flex>

          </Flex>

          <Flex backgroundColor="white.100" width="95%" height="80px" textColor="#558085" alignItems="center" 
                fontSize="25px" fontWeight="bold" marginBottom="-20px">

            <a href="#">Home</a>
          
          </Flex>

          <Flex backgroundColor="white.100" width="95%" height="80px" textColor="#558085" alignItems="center"
                fontSize="25px" fontWeight="bold" marginBottom="-20px">

            <a href="#">Perfil</a>

          </Flex>

          <Flex backgroundColor="white.100" width="95%" height="80px" textColor="#558085" alignItems="center" 
                fontSize="25px" fontWeight="bold" marginBottom="-20px">

            <a href="#" a>Pessoas</a>

          </Flex>

          <Flex backgroundColor="white.100" width="95%" height="80px" textColor="#558085" alignItems="center" 
                marginBottom="-35px">

          <a href="#"><li> Alunos </li></a>      
            
          </Flex>

          <Flex backgroundColor="white.100" width="95%" height="80px" textColor="#558085" alignItems="center" 
                marginBottom="-15px">
            
           <a href="#"><li> Usuários </li></a>

          </Flex>

          <Flex backgroundColor="white.100" width="95%" height="80px" textColor="#558085" alignItems="center" 
                fontSize="25px" fontWeight="bold" marginBottom="-20px">

            <a href="#">Armários</a>

          </Flex>

          <Flex backgroundColor="white.100" width="95%" height="80px" textColor="#558085" alignItems="center" 
                fontSize="25px" fontWeight="bold">

            <a href="#">Aluguéis</a>

          </Flex>

        </Flex>

        <Flex width="80%" height="91%" marginTop="4rem" justifyContent="space-around">

          <Flex backgroundColor="white.100" width="100%" height="80px" borderRadius="15px" marginLeft="35px"
          marginTop="-40px" alignItems="center">

              <Text marginLeft="20px" fontSize="25px" textColor="#558085" fontWeight="bold">
                  Home
              </Text>

              </Flex>

        </Flex>

        <Flex backgroundColor="white.100" width="334px" height="600px" direction="column" marginTop="90px"
              marginLeft="-1160px" borderRadius="15px">

                <Text marginLeft="20px" marginTop="20px"  fontSize="26px" textColor="#558085" fontWeight="bold" >
                  Notificações
                </Text>

                <Flex backgroundColor="#BFDDE0" marginInline="20px" marginTop="35px"  height="100px" 
                      borderRadius="12px" alignItems="center">

                  <BellIcon height="25px" width="30px" marginLeft="10px"/>     

                  <Flex direction="column">

                  <Text marginLeft="15px" >
                    Novo Usuário Ativo
                  </Text>

                  <Text marginLeft="15px">
                    RM: 12345
                  </Text>
                  
                  </Flex>

                </Flex>

                <Flex backgroundColor="#BFDDE0" marginInline="20px" marginTop="35px" height="100px" 
                      borderRadius="12px" alignItems="center">

                <UnlockIcon height="20px" width="30px" marginLeft="10px"/>        

                <Flex direction="column">

                  <Text marginLeft="15px" >
                      Aluguel Pendente
                  </Text>

                  <Text marginLeft="15px">
                      Pedido n°104
                  </Text>

                  </Flex>

                </Flex>

                <Flex backgroundColor="#BFDDE0" marginInline="20px" marginTop="35px" height="100px" 
                      borderRadius="12px" alignItems="center">

                <CheckIcon height="20px" width="30px" marginLeft="10px"/>        

                <Flex direction="column">

                  <Text marginLeft="15px">
                    Pagamento Liberado
                  </Text>

                  <Text marginLeft="15px">
                    Pedido n°10
                  </Text>

                  </Flex>

                </Flex>

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
=======
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
>>>>>>> main
