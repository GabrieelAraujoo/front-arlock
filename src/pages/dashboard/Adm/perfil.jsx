import React from "react";
import { Main } from "../../../layout/Main";
import { Container } from "../../../layout/Container";
import { Flex, Text } from "@chakra-ui/react";
import PageTitle from "../../../components/PageTitle";

function Perfil(){
    return(
     <Main>
       <Container>
         <Flex width="full" padding="2rem" direction="column">
            <PageTitle title={"Perfil"} />

         <Flex backgroundColor="white.100"
               width="full"
               height="45%"
               borderRadius="15px"
               alignItems="flex-start"
               marginTop="15px"
               direction="column"
               >
            <Text fontSize="35px"
                textColor="#558085"
                fontWeight="bold"
                marginLeft="20px"
                marginTop="20px">
               Configurações da Conta
            </Text>

            <Flex alignItems="baseline">

            <Flex bgColor="gray.200" padding="10px" width="590px" height="70px" marginLeft="20px" marginTop="25px" borderRadius="12px" direction="column">
               <Text fontSize="1px">
                  Nome
               </Text>
               <Text>
                  John Deo
               </Text>
            </Flex>

            <Flex bgColor="gray.200" padding="10px" width="590px" height="70px" marginLeft="20px" marginTop="25px" borderRadius="12px" direction="column">
               <Text>
                  Email
               </Text>
               <Text>
                  Johndeo@gmail.com
               </Text>
            </Flex>

            </Flex>

         </Flex>   
    

         </Flex>
       </Container>
    </Main>
 );       
}

export default Perfil;