import React from "react";
import { Main } from "../../../layout/Main";
import { Container } from "../../../layout/Container";
import { Flex, Text } from "@chakra-ui/react";

function Home() {
  return (
    <Main>
      <Container>
        <Flex
          backgroundColor="white.100"
          width="17%"
          height="full"
          direction="column"
          alignItems="center"
        >

          <Flex backgroundColor="white.100" width="95%" height="80px" textColor="#00D4FF" alignItems="center" 
                fontSize="25px" fontWeight="bold" marginBottom="-15px">
            Home
          </Flex>

          <Flex backgroundColor="white.100" width="95%" height="80px" textColor="#00D4FF" alignItems="center"
                fontSize="25px" fontWeight="bold" marginBottom="-15px">
            Perfil
          </Flex>

          <Flex backgroundColor="white.100" width="95%" height="80px" textColor="#00D4FF" alignItems="center" 
                fontSize="25px" fontWeight="bold" marginBottom="-10px">
            Pessoas
          </Flex>

          <Flex backgroundColor="white.100" width="95%" height="80px" textColor="#00D4FF" alignItems="center" 
                marginBottom="-25px">
            Alunos
          </Flex>

          <Flex backgroundColor="white.100" width="95%" height="80px" textColor="#00D4FF" alignItems="center" 
                marginBottom="-15px">
            Usuários
          </Flex>

          <Flex backgroundColor="white.100" width="95%" height="80px" textColor="#00D4FF" alignItems="center" 
                fontSize="25px" fontWeight="bold" marginBottom="-15px">
            Armários
          </Flex>

          <Flex backgroundColor="white.100" width="95%" height="80px" textColor="#00D4FF" alignItems="center" 
                fontSize="25px" fontWeight="bold">
            Aluguéis
          </Flex>

        </Flex>

        <Flex
          width="80%"
          height="91%"
          marginTop="4rem"
          justifyContent="space-around"
        >
          <Flex 
          backgroundColor="white.100" 
          width="95%" 
          height="80px" 
          borderRadius="15px" 
          marginLeft="10px"
          marginTop="-25px"
          alignItems="center">

              <Text marginLeft="20px" fontSize="25px" textColor="#00D4FF" fontWeight="bold">
                  Home
              </Text>

              </Flex>

              

        </Flex>

        <Flex 
              backgroundColor="white.100"
              width="22%"
              height="70%"
              direction="column"
              alignItems=""
              marginTop="90px"
              marginLeft="-1160px"
              borderRadius="15px">

                <Text marginLeft="20px" marginTop="20px"  fontSize="20px" textColor="#00D4FF" fontWeight="bold" >
                  Notificações
                </Text>

                <Flex backgroundColor="#00B9FF" marginInline="20px" marginTop="35px"  height="80px" borderRadius="20px" alignItems="center">

                  <Text marginLeft="20px">
                    Novo Usuário Ativo
                  </Text>

                </Flex>

                <Flex backgroundColor="#00B9FF" marginInline="20px" marginTop="35px" height="80px" borderRadius="20px" alignItems="center">

                  <Text marginLeft="20px">
                    Aluguel Pendente
                  </Text>

                </Flex>

                <Flex backgroundColor="#00B9FF" marginInline="20px" marginTop="35px" height="80px" borderRadius="20px" alignItems="center">

                  <Text marginLeft="20px">
                    Pagamento Liberado
                  </Text>

                </Flex>

        </Flex>

        <Flex backgroundColor="white.100" 
              width="50%" 
              height="38%" 
              borderRadius="15px" 
              marginLeft="50px"
              marginTop="-150px"
              >

                <Flex backgroundColor="#c5c5c5" 
                      width="30%" 
                      height="100px" 
                      borderRadius="15px"
                      margin="15px"
                      >

                          <Text fontSize="60px">
                            0000
                          </Text>

                          <Text>
                            Total de Armários
                          </Text>
                        
                </Flex>
                

                <Flex backgroundColor="#c5c5c5" 
                      width="30%" 
                      height="100px" 
                      borderRadius="15px"
                      margin="15px"
                      >

                          <Text fontSize="60px">
                            0000
                          </Text>

                          <Text>
                            Armarios Disponíveis
                          </Text>

                </Flex> 

                <Flex backgroundColor="#c5c5c5" 
                      width="30%" 
                      height="100px" 
                      borderRadius="15px"
                      margin="15px"
                      >

                          <Text fontSize="60px">
                            0000
                          </Text>

                          <Text>
                            Armários Alugados
                          </Text>

                </Flex> 

                <Flex backgroundColor="#c5c5c5" 
                      width="30%" 
                      height="100px" 
                      borderRadius="15px"
                      margin="15px"
                      >

                          <Text fontSize="60px">
                            0000
                          </Text>

                          <Text>
                            Armários Inativos
                          </Text>

                </Flex>   

              
        </Flex>

        <Flex backgroundColor="white.100" 
              width="50%" 
              height="30%" 
              borderRadius="15px" 
              marginLeft="-750px"
              marginTop="390px"
              >
                
                
                <Text marginLeft="15px" marginTop="15px" fontSize="25px" fontWeight="bold" textColor="#00D4FF">
                  Painel Financeiro
                </Text>

                <Flex backgroundColor="#c5c5c5" 
                      width="30%" 
                      height="100px" 
                      borderRadius="15px"
                      margin="15px"
                      >

                          <Text fontSize="60px">
                            R$0000,00
                          </Text>

                          <Text>
                            Valor total
                          </Text>


                </Flex>

                <Flex backgroundColor="#c5c5c5" 
                      width="30%" 
                      height="100px" 
                      borderRadius="15px"
                      margin="15px"
                      >

                          <Text fontSize="60px">
                            00000
                          </Text>

                          <Text>
                            Alugueis Pendentes
                          </Text>


                </Flex>

                
                
                 

                 

              
        </Flex>

        



      </Container>
    </Main>
  );
}

export default Home;
