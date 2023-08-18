import { Tbody, Td } from "@chakra-ui/react";
import { LockIcon, UnlockIcon } from "@chakra-ui/icons";

export function BodyListAlunos({ aluno }) {
  return (
    <Tbody fontSize="13px" paddingTop="12px" paddingBottom="1px">
      <Td width="25%">{aluno.rm}</Td>
      <Td width="25%">{aluno.nome}</Td>
      <Td width="25%">{aluno.curso}</Td>
      {aluno.status === "ativo" ? (
        <Td width="25%">
          <UnlockIcon
            marginLeft="9px"
            height="20px"
            width="20px"
            color="gray.400"
          />
        </Td>
      ) : (
        <Td width="25%">
          <LockIcon marginLeft="9px" height="20px" width="20px" color="black" />
        </Td>
      )}
    </Tbody>
  );
}
