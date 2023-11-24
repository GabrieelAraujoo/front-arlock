import {
  Text,
  Tbody,
  Td,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Flex,
  useBoolean,
} from "@chakra-ui/react";
import { LockIcon, UnlockIcon } from "@chakra-ui/icons";
import { ButtonExit } from "../../../components/Button";
import { PutAluno } from "../../../hook/alunos/usePutAlunos";

export function BodyListAlunos({ aluno }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [showModal, setShowModal] = useBoolean();

  function handleStatus(id) {
    const res = PutAluno(id);

    console.log(res);

    setShowModal.on();

    onClose();
  }

  function handleCloseModalConfirm() {
    setShowModal.off();
  }

  return (
    <>
      <Tbody
        fontSize="13px"
        paddingTop="12px"
        paddingBottom="1px"
        id="tabela-aluno"
      >
        <Td width="25%">{aluno.rm}</Td>
        <Td width="25%">{aluno.nome}</Td>
        <Td width="25%">{aluno.curso}</Td>
        {aluno.status === "ativado" ? (
          <Td width="25%">
            <UnlockIcon
              marginLeft="9px"
              height="20px"
              width="20px"
              color="gray.400"
              onClick={onOpen}
            />
          </Td>
        ) : (
          <Td width="25%">
            <LockIcon
              marginLeft="9px"
              height="20px"
              width="20px"
              color="black"
              onClick={onOpen}
            />
          </Td>
        )}
      </Tbody>

      {/*Box para Bloqueio do Aluno*/}
      {aluno.status === "ativado" ? (
        <Flex>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent
              background="#fff"
              alignItems="center"
              height={{ base: "360px", sm: "330px" }}
              width={{ base: "90%", sm: "90%" }}
              marginY="auto"
            >
              <ModalHeader
                marginBottom="2.3rem"
                fontSize="20px"
                textColor="#558085"
                marginTop="5px"
              >
                Bloquear Aluno?
              </ModalHeader>
              <ModalBody textAlign="center">
                <Text marginBottom="1.1rem" fontSize="14px">
                  Ao bloquear este aluno, você impossibilita o acesso dele
                  dentro da plataforma.
                </Text>
                <Text fontSize="14px">Você realmente deseja bloquear?</Text>
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
                  title={"Voltar"}
                  marginTop="10px"
                  paddingRight={{ base: "125%", sm: "65%" }}
                  paddingLeft={{ base: "125%", sm: "65%" }}
                  onClick={onClose}
                />
                <ButtonExit
                  title={"Bloquear"}
                  marginTop={{ base: "10px" }}
                  marginLeft={{ sm: "1rem" }}
                  paddingRight={{ base: "125%", sm: "65%" }}
                  paddingLeft={{ base: "125%", sm: "65%" }}
                  onClick={() => handleStatus(aluno.id)}
                />
              </Flex>
            </ModalContent>
          </Modal>
        </Flex>
      ) : (
        /*Box para Desbloqueio do Aluno*/
        <Flex>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent
              background="#fff"
              alignItems="center"
              height={{ base: "360px", sm: "330px" }}
              width={{ base: "90%", sm: "90%" }}
              marginY="auto"
            >
              <ModalHeader
                marginBottom="2.3rem"
                fontSize="20px"
                textColor="#558085"
                marginTop="5px"
              >
                Desbloquear Aluno?
              </ModalHeader>
              <ModalBody textAlign="center">
                <Text marginBottom="1.1rem" fontSize="14px">
                  Ao desbloquear este aluno, você possibilita o acesso dele
                  dentro da plataforma.
                </Text>
                <Text fontSize="14px">Você realmente deseja desbloquear?</Text>
              </ModalBody>
              <Flex
                marginBottom="1.4rem"
                marginTop={{ base: "10px" }}
                textAlign="center"
                direction={{ base: "column", sm: "row", lg: "row" }}
                justifyContent="center"
                alignItems="center"
              >
                <ButtonExit
                  title={"Voltar"}
                  marginTop="10px"
                  paddingRight={{ base: "125%", sm: "65%" }}
                  paddingLeft={{ base: "125%", sm: "65%" }}
                  onClick={onClose}
                />
                <ButtonExit
                  title={"Desbloquear"}
                  marginTop={{ base: "10px" }}
                  marginLeft={{ sm: "1rem" }}
                  paddingRight={{ base: "125%", sm: "65%" }}
                  paddingLeft={{ base: "125%", sm: "65%" }}
                  onClick={() => handleStatus(aluno.id)}
                />
              </Flex>
            </ModalContent>
          </Modal>
        </Flex>
      )}

      {/* Modal atualizado */}
      <Modal
        isOpen={showModal}
        onClose={setShowModal.off}
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
            Cadastro atualizado!
          </ModalHeader>
          <ModalBody w="full">
            <Text
              marginBottom="1.1rem"
              fontSize="1rem"
              marginRight="1rem"
              textAlign="center"
            >
              O cadastro foi atualizado com sucesso!
            </Text>
          </ModalBody>
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
              onClick={() => handleCloseModalConfirm()}
            />
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
}
