import React, { useEffect, useState } from "react";
import {
  Flex,
  Text,
  Box,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@chakra-ui/react";
import { ButtonExit } from "../Button";
import { SelectLabel } from "../Select/SelectCurso";
import { listPayment } from "../../Mock/listPayment";

export function BoxArmario({ armario }) {
  const [reserva, setReserva] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userData, setUserData] = useState("");
  const [typePayment, setTypePayment] = useState("");

  const changeValue = (e) => {
    const { name, value } = e.target;
    const letter = "armarioNumero";
    const number = "armarioLetra";

    setUserData({
      ...userData,
      [name]: value,
      [letter]: armario.letra,
      [number]: armario.numero,
    });

    setTypePayment(value);
  };

  function handleSelected() {
    if (armario.status === true) {
      onOpen();
    }
  }

  function handleReserva() {
    onClose();
    console.log(userData);
    setReserva(userData);
  }

  // useEffect(() => {
  //   if (reserva === false) {
  //     onOpen();
  //   }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <>
      <Flex
        width="130px"
        height="186px"
        background="#bfdde0"
        opacity={armario.status === true ? "100%" : "50%"}
        borderRadius="12px"
        direction="column"
        alignItems="center"
        justifyContent="space-around"
        cursor={armario.status === true ? "pointer" : "not-allowed"}
        _hover={{ background: "#60E8F8" }}
        onClick={() => handleSelected()}
      >
        <Flex width="full" direction="column" alignItems="center">
          <Box
            width="70%"
            height="8px"
            background="#558085"
            borderRadius="10px"
            marginBottom=".4rem"
          />
          <Box
            width="70%"
            height="8px"
            background="#558085"
            borderRadius="10px"
            marginBottom=".4rem"
          />
          <Box
            width="70%"
            height="8px"
            background="#558085"
            borderRadius="10px"
          />
        </Flex>

        <Flex width="full" marginLeft="2.2rem">
          <Flex
            width="20px"
            height="20px"
            background="#558085"
            borderRadius="50%"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              width="10px"
              height="10px"
              borderRadius="50%"
              background="#D9D9D9"
            />
          </Flex>
        </Flex>

        <Text textColor="#558085" fontSize="13px">
          Armário {armario.letra} {armario.numero}
        </Text>
      </Flex>

      {/* Primeiro modal */}
      <Modal isOpen={isOpen} onClose={onClose} name="First-Modal" id="First-Modal">
        <ModalOverlay />
        <ModalContent
          background="#fff"
          alignItems="center"
          width={{ base: "90%", sm: "90%" }}
          marginY="auto"
        >
          <ModalHeader fontSize="20px" textColor="#558085" marginTop="5px">
            Reservar armário?
          </ModalHeader>
          <ModalBody w="full">
            <Flex direction="column">
              <Text marginBottom="1rem" fontSize="20px" textColor="#558085">
                Armário {armario.letra}
                {armario.numero}
              </Text>
              <Flex>
                <Text marginBottom="1.1rem" fontSize="14px" marginRight="1rem">
                  Localização:
                </Text>
                <Text fontSize="14px">{armario.localization}</Text>
              </Flex>
              <Flex>
                <Text marginBottom="1.1rem" fontSize="14px" marginRight="1rem">
                  Valor:
                </Text>
                <Text fontSize="14px">R$ 50,00</Text>
              </Flex>
              <Flex w="auto" h="auto" alignItems="center">
                <Text mt="1.5rem" fontSize="14px" marginRight="1rem">
                  Forma de pagamento:
                </Text>
                <SelectLabel
                  label={"Payment"}
                  placeholder={"Escolha o Pagamento"}
                  options={listPayment}
                  name="payment"
                  id="payment"
                  value={userData.curso}
                  onChange={changeValue}
                />
              </Flex>
              {typePayment === "Pix" && (
                <>
                  <Flex marginTop="1rem">
                    <Text
                      marginBottom="1.1rem"
                      fontSize="14px"
                      marginRight="1rem"
                    >
                      Chave Pix:
                    </Text>
                    <Text fontSize="14px">secretario@etecia.com</Text>
                  </Flex>
                  <Flex direction="column">
                    <Text
                      marginBottom="1.1rem"
                      fontSize="12px"
                      marginRight="1rem"
                    >
                      Efetue o pagamento através da chave disponível e clique em{" "}
                      <b>RESERVAR</b>. No prazo de 48h, o armário é liberado.
                    </Text>
                    <Text fontSize="12px">
                      *qualquer que seja a forma de pagamento, o aluno só poderá
                      utilizar o armário após liberação no sistema, caso
                      contrário, está sujeito a suspensão.*
                    </Text>
                  </Flex>
                </>
              )}
              {(typePayment === "Cartão (crédito/débito)" ||
                typePayment === "Dinheiro") && (
                <Flex direction="column" marginTop="1rem">
                  <Text
                    marginBottom="1.1rem"
                    fontSize="12px"
                    marginRight="1rem"
                  >
                    Você deve <b>RESERVAR</b> e efetuar o pagamento na
                    secretário em 72h, caso não efetue o pagamento, o armário
                    volta a ficar disponível para reservas.
                  </Text>
                  <Text fontSize="12px">
                    *qualquer que seja a forma de pagamento, o aluno só poderá
                    utilizar o armário após liberação no sistema, caso
                    contrário, está sujeito a suspensão.*
                  </Text>
                </Flex>
              )}
            </Flex>
          </ModalBody>
          <Flex
            marginBottom="1.4rem"
            textAlign="center"
            marginTop={{ base: "10px" }}
            direction={{ base: "column", sm: "row", lg: "row" }}
            justifyContent="center"
            alignItems="center"
          >
            <ButtonExit
              title={"Cancelar"}
              marginTop="10px"
              paddingRight={{ base: "125%", sm: "65%" }}
              paddingLeft={{ base: "125%", sm: "65%" }}
              onClick={onClose}
            />
            <ButtonExit
              title={"Reservar"}
              marginTop={{ base: "10px" }}
              marginLeft={{ sm: "1rem" }}
              paddingRight={{ base: "125%", sm: "65%" }}
              paddingLeft={{ base: "125%", sm: "65%" }}
              isDisabled={typePayment === "" ? true : false}
              onClick={() => handleReserva()}
            />
          </Flex>
        </ModalContent>
      </Modal>

      
      {/* <Modal isOpen={isOpen} onClose={onClose} name="Second-Modal" id="Second-Modal">
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
      </Modal> */}
    </>
  );
}
