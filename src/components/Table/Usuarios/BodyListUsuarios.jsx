import { Tbody, Td } from "@chakra-ui/react";

export function BodyListUsuarios({ usuario }) {
  return (
    <Tbody fontSize="13px" paddingTop="12px" paddingBottom="1px">
      <Td width="25%">{usuario.id}</Td>
      <Td width="25%">{usuario.nome}</Td>
      <Td width="25%">{usuario.email}</Td>
    </Tbody>
  );
}
