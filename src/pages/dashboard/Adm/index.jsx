import React from "react";
import { Main } from "../../../layout/Main";
import { Container } from "../../../layout/Container";
import { Flex } from "@chakra-ui/react";

function Home() {
  return (
    <Main>
      <Container>
        <Flex
          backgroundColor="white.100"
          width="20%"
          height="full"
          direction="column"
          alignItems="center"
        >
          Menu Lateral
          <Flex backgroundColor="#c5c5c5" width="95%" height="80px">
            Titulo da Menu
          </Flex>
          <Flex backgroundColor="#c5c5c5" width="95%" height="80px">
            Titulo da Menu
          </Flex>
          <Flex backgroundColor="#c5c5c5" width="95%" height="80px">
            Titulo da Menu
          </Flex>
        </Flex>
        <Flex
          width="80%"
          height="91%"
          marginTop="4rem"
          justifyContent="space-around"
        >
          <Flex backgroundColor="#c5c5c5" width="95%" height="80px">
            Titulo da Pagina
          </Flex>
        </Flex>
      </Container>
    </Main>
  );
}

export default Home;
