import React from "react";
import { Main } from "../../layout/Main";
import { Container } from "../../layout/Container";
import { Flex } from "@chakra-ui/react";

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
          <Flex backgroundColor="#c5c5c5" width="40%" height="350px">
            Menu
          </Flex>
        </Flex>
      </Container>
    </Main>
  );
}

export default Login;
