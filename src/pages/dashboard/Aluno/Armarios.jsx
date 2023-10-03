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
// import { GetArmarios } from "../../../hook/armarios/useGetArmarios";

export function Armarios() {
  const [reserva, setReserva] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [armarios, setArmarios] = useState([]);

  useEffect(() => {
    if (reserva) {
      onOpen();
    }

    fetch(
      "https://testarlock.000webhostapp.com/v1/Api.php?apicall=getArmarios",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));

    // GetArmarios();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reserva]);

  useEffect(() => {
    // Realize a solicitação HTTP para obter a lista de usuários
    fetch("https://testarlock.000webhostapp.com/Api_v1_react/Armario.php") // Substitua "/api/usuarios" pela URL da sua API
      .then((response) => response.json())
      .then((data) => {
        setArmarios(data); // Atualiza o estado com os dados dos usuários
        console.log(armarios);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de usuários:", error);
      });
  }, []);

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
