import {
  Flex,
  Text,
  Tbody,
  Td,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useBoolean,
  Tooltip,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { ButtonExit } from "../../../Button";
import React from "react";
import { PutAprovaAluguel } from "../../../../hook/alugueis/usePutAprovaAlugueis";
import { PutReprovaAluguel } from "../../../../hook/alugueis/usePutReprovaAluguel";

export function BodyListAprovacao({ aprovacao }) {
  const [showModalAprova, setShowModalAprova] = useBoolean();
  const [showModalReprova, setShowModalReprova] = useBoolean();
  const [showModalConfirma, setShowModalConfirma] = useBoolean();

  function handleShowModal(type) {
    if (type === "Aprova") {
      setShowModalAprova.on();
    } else if (type === "Reprova") {
      setShowModalReprova.on();
    }
  }

  function handleCloseModal(type) {
    if (type === "Aprova") {
      setShowModalAprova.off();
    } else if (type === "Reprova") {
      setShowModalReprova.off();
    } else if (type === "Confirma") {
      setShowModalConfirma.off();
    }
  }

  function handleAprova(id) {
    PutAprovaAluguel(id);

    setShowModalAprova.off();
    setShowModalConfirma.on();
  }

  function handleReprova(id) {
    PutReprovaAluguel(id);

    setShowModalReprova.off();
    setShowModalConfirma.on();
  }

  return (
    <>
      <Tbody
        fontSize="13px"
        paddingTop="12px"
        paddingBottom="1px"
        overflowX={{ base: "hidden" }}
      >
        <Td width="15%">
          {aprovacao.letra}
          {aprovacao.numero}
        </Td>
        <Td width="20%">{aprovacao.nome}</Td>
        <Td width="10%">{aprovacao.rm}</Td>
        <Td width="25%">{aprovacao.curso}</Td>
        <Td width="15%">{aprovacao.pagamento}</Td>
        <Td width="15%">
          <Flex alignItems="baseline">
            <Tooltip label="Aprovar">
              <CheckIcon
                height="20px"
                color="gray.400"
                onClick={() => handleShowModal("Aprova")}
                cursor="pointer"
              />
            </Tooltip>
            <Tooltip label="Anular">
              <CloseIcon
                cursor="pointer"
                marginLeft="15px"
                marginRight="10px"
                height="20px"
                color="gray.400"
                onClick={() => handleShowModal("Reprova")}
              />
            </Tooltip>
          </Flex>
        </Td>
      </Tbody>

      {/* modal aprova aluguel */}
      <Flex>
        <Modal isOpen={showModalAprova} onClose={showModalAprova.off}>
          <ModalOverlay />
          <ModalContent
            background="#fff"
            alignItems="center"
            width={{ base: "90%", sm: "90%" }}
            marginY="auto"
          >
            <ModalHeader fontSize="20px" textColor="#558085" marginTop="1rem">
              Aprovar Aluguel?
            </ModalHeader>
            <ModalBody textAlign="center" marginBottom="2rem">
              <Text marginBottom="1rem" fontSize="14px">
                Ao aprovar esse aluguel, você confirma o pagamento e libera o
                aluno para usar o armário durante o semestre.
              </Text>
              <Text fontSize="14px">Você realmente deseja aprovar?</Text>
            </ModalBody>

            <Flex
              w="full"
              alignItems="baseline"
              paddingX="1.3rem"
              marginBottom="1rem"
            >
              <ButtonExit
                title={"Voltar"}
                onClick={() => handleCloseModal("Aprova")}
              />
              <ButtonExit
                title={"Aprovar"}
                marginLeft="2rem"
                onClick={() => handleAprova(aprovacao.id)}
              />
            </Flex>
          </ModalContent>
        </Modal>
      </Flex>

      {/* modal cancela aluguel */}
      <Flex>
        <Modal isOpen={showModalReprova} onClose={showModalReprova.off}>
          <ModalOverlay />
          <ModalContent
            background="#fff"
            alignItems="center"
            width={{ base: "90%", sm: "90%" }}
            marginY="auto"
          >
            <ModalHeader fontSize="20px" textColor="#558085" marginTop="1rem">
              Anular Aluguel?
            </ModalHeader>
            <ModalBody textAlign="center" marginBottom="2rem">
              <Text marginBottom="1rem" fontSize="14px">
                Ao anular esse aluguel, você reprova o pagamento do aluno e
                libera o armário para reserva.
              </Text>
              <Text fontSize="14px">Você realmente deseja anular?</Text>
            </ModalBody>

            <Flex
              w="full"
              alignItems="baseline"
              paddingX="1.3rem"
              marginBottom="1rem"
            >
              <ButtonExit
                title={"Voltar"}
                onClick={() => handleCloseModal("Reprova")}
              />
              <ButtonExit
                title={"Anular"}
                marginLeft="2rem"
                onClick={() => handleReprova(aprovacao.id)}
              />
            </Flex>
          </ModalContent>
        </Modal>
      </Flex>

      {/* Modal confirma */}
      <Modal
        isOpen={showModalConfirma}
        onClose={showModalConfirma.off}
        name="Second-Modal"
        id="Second-Modal"
      >
        <ModalOverlay />
        <ModalContent
          background="#fff"
          alignItems="center"
          width={{ base: "90%", sm: "90%" }}
          marginY="auto"
        >
          <ModalHeader fontSize="20px" textColor="#558085" marginTop="5px">
            Ação realizada com sucesso!
          </ModalHeader>

          <Flex
            marginBottom="1.4rem"
            textAlign="center"
            marginTop={{ base: "10px" }}
            justifyContent="center"
            alignItems="center"
          >
            <ButtonExit
              title={"Fechar"}
              marginTop="10px"
              onClick={() => handleCloseModal("Confirma")}
            />
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
}
