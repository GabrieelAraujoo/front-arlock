import React from "react";
import { Main } from "../../../layout/Main";
import { Container } from "../../../layout/Container";
import { Flex, Text } from "@chakra-ui/react";
import { Button, ButtonGroup } from '@chakra-ui/react';
import PageTitle from "../../../components/PageTitle";
import { BoxInformation } from "../../../components/Box/BoxInformation";
import { ButtonExit } from "../../../components/Button";

function Perfil(){
    return(
     <Main>
       <Container>
         <Flex width="full" padding="2rem" direction="column" >
            <PageTitle title={"Perfil"} />

         <Flex backgroundColor="white.100"
               width="full"
               height="280px"
               borderRadius="15px"
               alignItems="flex-start"
               marginTop="1rem"
               direction="column"
               >
            <Text fontSize="35px" textColor="#558085" fontWeight="bold" marginLeft="1.3rem" marginTop="1.3rem">
               Configurações da Conta
            </Text>

            <Flex alignItems="baseline">

            <BoxInformation 
            title={"Nome"} 
            subtitle={"John Deo"}/>

            <BoxInformation
            title={"Email"}
            subtitle={"JohnDeo@gmail.com"}/>

            </Flex>

            <Flex alignItems="baseline">
               
               <ButtonExit title={"Voltar"}/>
               <ButtonExit title={"Sair"}/>

            </Flex>

         </Flex>   
    
         </Flex>
       </Container>
    </Main>
 );       
}

export default Perfil;