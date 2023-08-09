import React from "react";
import { Main } from "../../layout/Main";
import { Container } from "../../layout/Container";
import { Flex, Text, Input, Button ,Stack, InputGroup,InputRightElement,Checkbox,Divider} from "@chakra-ui/react";
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
          boxShadow=" 15px 15px 25px rgb(0, 0, 0, .5);"

        >
          <Flex boxShadow=" 15px 25px 35px rgb(0, 0, 0, .5);" backgroundColor="#fff" width="508px" height="478px" direction="column"  padding= "2rem"  alignItems="center" marginBottom="30px" borderRadius="10px">
            <Text margin= "0 0 50px" color="#558085" fontSize="30px"> Seja bem-vindo (a) </Text>
            <Flex direction="column" marginBottom="10px" >
            <Input type='text'boxShadow=" 0 10px 15px rgb(0, 0, 0, .5);" placeholder='E-mail' width="428px" height="60px" border="1px" borderColor="#EDE7F6"  marginBottom="20px"/>
            { <Stack >
               <InputGroup>
                  <Input type='password' boxShadow=" 0 10px 15px rgb(0, 0, 0, .5);" placeholder='Senha' width="428px" height="60px"  border="1px" borderColor="#EDE7F6" />
            <InputRightElement>
                  <ViewIcon color='black' />
            </InputRightElement>
              </InputGroup>
              </Stack> }
              </Flex>
              <Flex width="full" justifyContent="space-between">
                  <Checkbox Spacer="2" color="blueblack" defaultChecked align="left" >Lembre-se de mim</Checkbox>
                  
                  <Button  color="#558085" variant='link'>Esqueceu a senha ? </Button>
              </Flex>
                     
                  <Button colorScheme='teal' boxShadow=" 0 15px 25px rgb(0, 0, 0, .5);" size='lg' width="428px" height="60px" margin="20px 0 40px">Entrar</Button>
                  <Divider  />
                  <Button color="#558085" variant='link'> Ainda não possui uma conta ? </Button>
                    
                    
          </Flex>
        </Flex>
      </Container>
    </Main>
  );
}

export default Login;
