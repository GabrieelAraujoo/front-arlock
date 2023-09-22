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

export function Armarios() {
  const [reserva, setReserva] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (reserva) {
      onOpen();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reserva]);

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
                  gridGap="1rem"
                  padding="1rem"
                >
                  {listArmarios.map((item, index) => (
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

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          background="#fff"
          alignItems="center"
          width={{ base: "90%", sm: "90%" }}
          marginY="auto"
        >
          <ModalHeader fontSize="20px" textColor="#558085" marginTop="5px">
            Reserva Concluída!
          </ModalHeader>
          <ModalBody w="full">
            <Text
              marginBottom="1.1rem"
              fontSize="12px"
              marginRight="1rem"
              textAlign="center"
            >
              Parabéns, sua reserva foi concluída com sucesso!!
            </Text>
            <Text
              marginBottom="1.1rem"
              fontSize="12px"
              marginRight="1rem"
              textAlign="center"
            >
              Aguarde o prazo conforme estabelicido de acordo com a forma de
              pagamento para utilizar o armário. Em breve, você receberá uma
              notificação sobre a liberação do armário. Fique de olho!
            </Text>
          </ModalBody>
          <Flex
            marginBottom="1.4rem"
            textAlign="center"
            marginTop={{ base: "10px" }}
            justifyContent="center"
            alignItems="center"
          >
            <ButtonExit title={"Cancelar"} marginTop="10px" onClick={onClose} />
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
}
