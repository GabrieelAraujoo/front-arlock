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
          width="14%"
          height="full"
          direction="column"
          alignItems="center"
        >

          <Flex backgroundColor="white.100" width="95%" height="80px" textColor="#558085" alignItems="center" 
                fontSize="25px" fontWeight="bold" marginBottom="-15px">
            Home
          </Flex>

          <Flex backgroundColor="white.100" width="95%" height="80px" textColor="#558085" alignItems="center"
                fontSize="25px" fontWeight="bold" marginBottom="-15px">
            Perfil
          </Flex>

          <Flex backgroundColor="white.100" width="95%" height="80px" textColor="#558085" alignItems="center" 
                fontSize="25px" fontWeight="bold" marginBottom="-10px">
            Pessoas
          </Flex>

          <Flex backgroundColor="white.100" width="95%" height="80px" textColor="#558085" alignItems="center" 
                marginBottom="-25px">
            Alunos
          </Flex>

          <Flex backgroundColor="white.100" width="95%" height="80px" textColor="#558085" alignItems="center" 
                marginBottom="-15px">
            Usuários
          </Flex>

          <Flex backgroundColor="white.100" width="95%" height="80px" textColor="#558085" alignItems="center" 
                fontSize="25px" fontWeight="bold" marginBottom="-15px">
            Armários
          </Flex>

          <Flex backgroundColor="white.100" width="95%" height="80px" textColor="#558085" alignItems="center" 
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
          width="100%" 
          height="80px" 
          borderRadius="15px" 
          marginLeft="35px"
          marginTop="-40px"
          alignItems="center">

              <Text marginLeft="20px" fontSize="25px" textColor="#558085" fontWeight="bold">
                  Home
              </Text>

              </Flex>

              

        </Flex>

        <Flex 
              backgroundColor="white.100"
              width="334px"
              height="600px"
              direction="column"
              alignItems=""
              marginTop="90px"
              marginLeft="-1160px"
              borderRadius="15px">

                <Text marginLeft="20px" marginTop="20px"  fontSize="20px" textColor="#558085" fontWeight="bold" >
                  Notificações
                </Text>

                <Flex backgroundColor="#BFDDE0" marginInline="20px" marginTop="35px"  height="80px" borderRadius="20px" alignItems="center">

                  <Text marginLeft="20px">
                    Novo Usuário Ativo
                  </Text>

                </Flex>

                <Flex backgroundColor="#BFDDE0" marginInline="20px" marginTop="35px" height="80px" borderRadius="20px" alignItems="center">

                  <Text marginLeft="20px">
                    Aluguel Pendente
                  </Text>

                </Flex>

                <Flex backgroundColor="#BFDDE0" marginInline="20px" marginTop="35px" height="80px" borderRadius="20px" alignItems="center">

                  <Text marginLeft="20px">
                    Pagamento Liberado
                  </Text>

                </Flex>

        </Flex>

        <Flex backgroundColor="white.100" 
              width="52%" 
              height="41%" 
              borderRadius="15px" 
              marginLeft="49px"
              marginTop="-200px"    
              >
                <Flex direction="column">  
                <Flex backgroundColor="#BFDDE0" 
                      width="355px" 
                      height="144px" 
                      borderRadius="15px"
                      margin="15px"
                      >

                        <Flex marginLeft="20px" direction="column">

                          <Text fontSize="60px" textColor="#558085">
                            0000
                          </Text>

                          <Text textColor="#558085">
                            Total de Armários
                          </Text>

                        </Flex>  
                        
                </Flex>
                

                <Flex backgroundColor="#BFDDE0" 
                      width="355px" 
                      height="144px" 
                      borderRadius="15px"
                      margin="15px"
                      direction="column"
                      >

                          <Flex marginLeft="20px" direction="column">

                          <Text fontSize="60px" textColor="#558085">
                            0000
                          </Text>

                          <Text textColor="#558085">
                            Armarios Alugados
                          </Text>

                          </Flex>

                </Flex> 
                </Flex>

                <Flex direction="column">

                <Flex backgroundColor="#BFDDE0" 
                      width="355px" 
                      height="144px" 
                      borderRadius="15px"
                      margin="15px"
                      direction="column"
                      >

                          <Flex marginLeft="20px" direction="column">

                          <Text fontSize="60px" textColor="#558085">
                            0000
                          </Text>

                          <Text textColor="#558085">
                            Armários Disponíveis
                          </Text>

                          </Flex>

                </Flex> 

                <Flex backgroundColor="#BFDDE0" 
                      width="355px" 
                      height="144px" 
                      borderRadius="12px"
                      margin="15px"
                      direction="column"
                      >

                          <Flex marginLeft="20px" direction="column">

                          <Text fontSize="60px" textColor="#558085">
                            0000
                          </Text>

                          <Text textColor="#558085">
                            Armários Inativos
                          </Text>

                          </Flex>

                </Flex>   
                </Flex>        
              
        </Flex>

        <Flex backgroundColor="white.100" 
              width="52%" 
              height="35%" 
              borderRadius="15px" 
              marginLeft="-777px"
              marginTop="420px"
              direction="column"
              >
                
                
                <Text marginLeft="15px" marginTop="15px" fontSize="25px" fontWeight="bold" textColor="#558085" 
                borderBottom="1px" borderBottomColor="#558085">
                  Painel Financeiro
                </Text>

              <Flex alignItems="baseline">

                <Flex backgroundColor="#BFDDE0" 
                      width="45%" 
                      height="140px" 
                      borderRadius="15px"
                      margin="15px"
                      >

                          <Flex marginLeft="20px" direction="column">

                          <Text fontSize="60px" textColor="#558085">
                            R$0000,00
                          </Text>

                          <Text textColor="#558085">
                            Valor total
                          </Text>

                          </Flex>


                </Flex>

                <Flex backgroundColor="#BFDDE0" 
                      width="45%" 
                      height="140px" 
                      borderRadius="15px"
                      margin="15px"
                      >

                          <Flex marginLeft="20px" direction="column">

                          <Text fontSize="60px" textColor="#558085">
                            00000
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
