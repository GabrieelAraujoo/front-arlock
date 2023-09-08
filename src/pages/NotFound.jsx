import React from "react";
import { Main } from "../layout/Main";
import { Container } from "../layout/Container";
import { Flex, Text } from "@chakra-ui/react";

function NotFound() {
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
            direction="column"
            padding="2rem"
            alignItems="center"
            marginBottom="30px"
            borderRadius="10px"
          >
            <Text
              color="#558085"
              fontWeight="bold"
              fontSize={{ base: "1.5rem", lg: "1.8rem" }}
            >
              Página não encontrada!!
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Main>
  );
}

export default NotFound;
