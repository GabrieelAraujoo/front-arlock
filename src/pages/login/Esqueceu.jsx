import { Main } from "../../layout/Main";
import { Container } from "../../layout/Container";
import { Flex, Text, Button } from "@chakra-ui/react";
import { InputLabel } from "../../components/Input/Geral";

export default function Esqueceu() {
 

  return (
    <Main>
      <Container>
        <Flex
          width="100%"
          height="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Flex
            boxShadow=" 15px 25px 35px rgb(0, 0, 0, .5);"
            backgroundColor="#fff"
            width={{ base: "80%", lg: "508px" }}
            height="50%"
            direction="column"
            padding="2rem"
            alignItems="center"
            marginBottom="30px"
            borderRadius="10px"
          >
            <Text
              color="#558085"
              fontWeight="bold"
              marginBottom="1rem"
              fontSize={{ sm: "0.8", md: "1.5rem", lg: "1.8rem" }}
            >
              Esqueceu a senha ?
            </Text>
          
           <Text align="center" >
            Para recuperar seu acesso ao sistema, por favor 
           </Text>
             
           <Text align="center" >
           informe o e-mail cadastrado 
           </Text>


            <Flex width="100%" direction="column" marginBottom="10px">
              <InputLabel label={"E-mail"} type="email" placeholder="E-mail" />
             
            </Flex>
          

            <Button
              height="50px"
              colorScheme="teal"
              boxShadow=" 0 2px 5px rgb(0, 0, 0, .5);"
              width="100%"
              marginY="1.5rem"
              fontWeight="normal"
            >
              Enviar
            </Button>

            <Flex
              justifyContent="center"
              w="full"
              borderTop="2px solid #558085"
              fontSize=".8rem"
              paddingTop="1rem"
            >
              <Text color="#558085" fontWeight="bold" cursor="pointer">
               Já possui uma conta ?
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Main>
  );
}


