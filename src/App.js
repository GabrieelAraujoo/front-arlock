import React from 'react';
import { Flex, Button, Text } from '@chakra-ui/react'

function App() {
  return (
    <Flex width="100%" height="100vh" background="#c1c1c1" flexDirection="column" justifyContent="center" alignItems="center">
      
      <Flex width="700px" height="500px" background="#fff" justifyContent="center">
          <Text>BEM-VINDO</Text>
      </Flex>

      <Flex width="700px" height="500px" background="#fff" flexDirection="column" justifyContent="center">
          
          <Button width="100px" height="50px">
            EMAIL
          </Button>
          <Button width="100px" height="50px">
            SENHA
          </Button>

      </Flex>
    </Flex>
  );
}

export default App;
