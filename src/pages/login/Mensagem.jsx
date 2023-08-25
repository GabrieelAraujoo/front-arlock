import { Main } from "../../layout/Main";
import { Container } from "../../layout/Container";
import { Flex, Text, Button } from "@chakra-ui/react";

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
            height="43%"
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
              Olhe o seu email
            </Text>
          
           <Text align="center" >
            Caso o e-mail fornecido seja de uma conta válida,
           </Text>
             
           <Text align="center" >
           enviaremos uma mensagem com as instruções de
           </Text>

           <Text align="center" >
           como recuperar o acesso ao sistema.
           </Text>

           
           
            <Button
              height="50px"
              colorScheme="teal"
              boxShadow=" 0 2px 5px rgb(0, 0, 0, .5);"
              width="100%"
              marginY="1.5rem"
              fontWeight="normal"
              marginTop="12%"
            >
              Enviar
            </Button>

          </Flex>
        </Flex>
      </Container>
    </Main>
  );
}