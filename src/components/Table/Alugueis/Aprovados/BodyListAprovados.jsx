import { Tbody, Td } from "@chakra-ui/react";

export function BodyListAprovados({ aprovado }) {
  return (
    <Tbody fontSize="13px" paddingTop="12px" paddingBottom="1px">
      <Td width="15%">{aprovado.letra}{aprovado.numero}</Td>
      <Td width="20%">{aprovado.nome}</Td>
      <Td width="10%">{aprovado.rm}</Td>
      <Td width="25%">{aprovado.curso}</Td>
      <Td width="15%">{aprovado.pagamento}</Td>
    </Tbody>
  );
}
