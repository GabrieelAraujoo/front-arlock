import React from "react";
import { Main } from "../../../layout/Main";
import { Container } from "../../../layout/Container";
import { Flex, Text } from "@chakra-ui/react";
import { LockIcon, BellIcon, UnlockIcon, CheckIcon } from '@chakra-ui/icons';

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
            Home
          </Flex>

          <Flex backgroundColor="white.100" width="95%" height="80px" textColor="#558085" alignItems="center"
                fontSize="25px" fontWeight="bold" marginBottom="-20px">
            Perfil
          </Flex>

          <Flex backgroundColor="white.100" width="95%" height="80px" textColor="#558085" alignItems="center" 
                fontSize="25px" fontWeight="bold" marginBottom="-20px">
            Pessoas
          </Flex>

          <Flex backgroundColor="white.100" width="95%" height="80px" textColor="#558085" alignItems="center" 
                marginBottom="-35px">

          <li> Alunos </li>      
            
          </Flex>

          <Flex backgroundColor="white.100" width="95%" height="80px" textColor="#558085" alignItems="center" 
                marginBottom="-15px">
            
           <li> Usuários </li>

          </Flex>

          <Flex backgroundColor="white.100" width="95%" height="80px" textColor="#558085" alignItems="center" 
                fontSize="25px" fontWeight="bold" marginBottom="-20px">
            Armários
          </Flex>

          <Flex backgroundColor="white.100" width="95%" height="80px" textColor="#558085" alignItems="center" 
                fontSize="25px" fontWeight="bold">
            Aluguéis
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

                          <Text textColor="#558085" fontWeight="bold">
                            Total de Armários
                          </Text>

                        </Flex>  
                        
                </Flex>
                
                <Flex backgroundColor="#BFDDE0" width="355px" height="144px" borderRadius="15px" margin="15px" direction="column">

                          <Flex marginLeft="20px" marginTop="10px" direction="column">

                          <Text fontSize="48px" textColor="#558085" fontWeight="bold">
                            00150
                          </Text>

                          <Text textColor="#558085" fontWeight="bold">
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

                          <Text textColor="#558085" fontWeight="bold">
                            Armários Disponíveis
                          </Text>

                          </Flex>

                </Flex> 

                <Flex backgroundColor="#BFDDE0" width="355px" height="144px" borderRadius="12px" margin="15px" direction="column">

                          <Flex marginLeft="20px" marginTop="10px" direction="column">

                          <Text fontSize="48px" textColor="#558085" fontWeight="bold">
                            00100
                          </Text>

                          <Text textColor="#558085" fontWeight="bold">
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

                          <Flex marginLeft="20px" marginTop="10px" direction="column">

                          <Text fontSize="48px" textColor="#558085" fontWeight="bold">
                            R$2.000,10
                          </Text>

                          <Text textColor="#558085" fontWeight="bold">
                            Valor total
                          </Text>

                          </Flex>

                </Flex>

                <Flex backgroundColor="#BFDDE0" width="345px" height="144px" borderRadius="15px" margin="15px">

                          <Flex marginLeft="20px" marginTop="10px" direction="column" fontWeight="bold">

                          <Text fontSize="48px" textColor="#558085" fontWeight="bold">
                            00020
                          </Text>

                          <Text textColor="#558085">
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
