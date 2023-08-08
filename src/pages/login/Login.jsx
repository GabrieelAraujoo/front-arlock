import React from "react";
import { Main } from "../../layout/Main";
import { Container } from "../../layout/Container";
import { Flex, Text, Input, Button ,Stack, InputGroup,InputRightElement,Checkbox} from "@chakra-ui/react";
import { ViewIcon} from '@chakra-ui/icons'

function Login() {

  return (
    <Main>
      <Container>
        <Flex
          width="100%"
          height="91%"
          justifyContent="center"
          alignItems="center"
        >
          <Flex backgroundColor="#fff" width="40%" height="350px" direction="column"  padding= "5rem"  alignItems="center">
            <Text color="#558085" > Seja Bem-Vindo (a) </Text>
            <Input  type='text' placeholder='E-mail' width="428px" height="50px" />
            { <Stack spacing={4}>
               <InputGroup>
                  <Input type='password' placeholder='Senha'
                  width="428px" height="50px" />
            <InputRightElement>
                  <ViewIcon color='#558085' />
            </InputRightElement>
              </InputGroup>
              </Stack> }
              <Flex alignItems="basline" >
                  <Checkbox colorScheme="red" defaultChecked align="left" >Lembre-se de mim</Checkbox>
                  <Button color="#558085" variant='link'>Esqueceu a senha ? </Button>
              </Flex>
                  <Button colorScheme='teal' size='lg' width="428px" height="35px">Button</Button>
                  <Button color="#558085" variant='link'> Ainda não possui uma conta ? </Button>
                    
                    
          </Flex>
        </Flex>
      </Container>
    </Main>
  );
}

export default Login;
