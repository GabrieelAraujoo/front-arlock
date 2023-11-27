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
  Tooltip,
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
        <Td width="15%">{aluno.rm}</Td>
        <Td width="35%">{aluno.nome}</Td>
        <Td width="40%">{aluno.curso}</Td>
        {aluno.status === "ativado" ? (
          <Td width="10%">
            <Tooltip label="Bloquear">
              <UnlockIcon
                marginLeft="9px"
                height="20px"
                width="20px"
                color="gray.400"
                onClick={onOpen}
              />
            </Tooltip>
          </Td>
        ) : (
          <Td width="10%">
            <Tooltip label="Desbloquear">
              <LockIcon
                marginLeft="9px"
                height="20px"
                width="20px"
                color="black"
                onClick={onOpen}
              />
            </Tooltip>
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
                <Text marginBottom="1.1rem" fontSize="1rem">
                  Ao bloquear este aluno, você impossibilita o acesso dele
                  dentro da plataforma.
                </Text>
                <Text fontSize="1rem">Você realmente deseja bloquear?</Text>
              </ModalBody>

              <Flex
                w="full"
                alignItems="baseline"
                paddingX="1.3rem"
                marginBottom="1rem"
              >
                <ButtonExit title={"Voltar"} onClick={onClose} />
                <ButtonExit
                  title={"Bloquear"}
                  marginLeft="2rem"
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
                <Text marginBottom="1.1rem" fontSize="1rem">
                  Ao desbloquear este aluno, você possibilita o acesso dele
                  dentro da plataforma.
                </Text>
                <Text fontSize="1rem">Você realmente deseja desbloquear?</Text>
              </ModalBody>

              <Flex
                w="full"
                alignItems="baseline"
                paddingX="1.3rem"
                marginBottom="1rem"
              >
                <ButtonExit title={"Voltar"} onClick={onClose} />
                <ButtonExit
                  title={"Desbloquear"}
                  marginLeft="2rem"
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
            Status atualizado!
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
              onClick={() => handleCloseModalConfirm()}
            />
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
}
