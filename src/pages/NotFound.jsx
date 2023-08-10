import { Center, Flex, Heading } from "@chakra-ui/react";
import React from "react";

function NotFound() {
  return (
    <div className="App">
      <Flex w="full" minH="100vh" justify="center">
        <Flex maxW="1300px" w="full" h="full">
          <Flex w="50%" h="30vh" direction="column" justify="center">
            <Center>
              <Flex direction="column">
                <Heading size="xl" textStyle="Bold">
                  Erro 404
                </Heading>
                <Heading size="lg" textStyle="Medium" mt="1rem">
                  Página não encontrada!!
                </Heading>
              </Flex>
            </Center>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}

export default NotFound;
