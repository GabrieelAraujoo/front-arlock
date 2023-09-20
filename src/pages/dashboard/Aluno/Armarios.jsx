import React from "react";
import { Main } from "../../../layout/Main";
import { Container } from "../../../layout/Container";
import { Flex } from "@chakra-ui/react";
import PageTitle from "../../../components/PageTitle";
import { listArmarios } from "../../../Mock/listArmarios";
import { BoxArmario } from "../../../components/Box/BoxArmario";

export function Armarios() {
  return (
    <Main>
      <Container>
        <Flex
          width="full"
          padding="2rem"
          direction="column"
          textColor="#558085"
        >
          <PageTitle title={"Armários"} />

          <Flex
            backgroundColor="white.100"
            width="full"
            height="550px"
            borderRadius="15px"
            alignItems="flex-start"
            marginTop="2rem"
            direction="column"
            paddingY="1rem"
          >
            {/* <Text
              fontSize="35px"
              textColor="#558085"
              fontWeight="bold"
              marginLeft="1.3rem"
              marginTop="1.3rem"
            >
              Armários Disponíveis
            </Text> */}

            <Flex
              w="full"
              direction="column"
              overflowX={{ base: "scroll", lg: "hidden" }}
            >
              <Flex
                width="100%"
                display="grid"
                gridTemplateColumns={{
                  base: "auto auto",
                  sm: "auto auto auto auto",
                  md: "auto auto auto auto auto",
                  lg: "auto auto auto auto auto auto auto auto",
                }}
                gridGap="1rem"
                padding="1rem"
              >
                {listArmarios.map((item, index) => (
                  <BoxArmario key={index} armario={item} />
                ))}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Main>
  );
}
