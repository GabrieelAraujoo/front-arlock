import React, { useEffect, useState } from "react";
import { Main } from "../../../layout/Main";
import { Container } from "../../../layout/Container";
import {
  Flex,
  useDisclosure,
  ModalBody,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
} from "@chakra-ui/react";
import PageTitle from "../../../components/PageTitle";
import { listArmarios } from "../../../Mock/listArmarios";
import { BoxArmario } from "../../../components/Box/BoxArmario";
import { ButtonExit } from "../../../components/Button";
import { GetArmarios } from "../../../hook/armarios/useGetArmarios";
// import { GetArmarios } from "../../../hook/armarios/useGetArmarios";

export function Armarios() {  
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [armarios, setArmarios] = useState([]);

  useEffect(() => {
    GetArmarios(setArmarios);
  }, [armarios] )

  return (
    <>
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
                  gridGap="0.5rem"
                  padding="1rem"
                >
                  {armarios.map((item, index, setReserva) => (
                    <BoxArmario
                      key={index}
                      armario={item}
                      setReserva={setReserva}
                    />
                  ))}
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </Main>
    </>
  );
}
