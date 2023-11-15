import { Thead, Th } from "@chakra-ui/react";

export function HeadListArmarios() {
  return (
    <Thead borderBottom="1px" borderBottomColor="gray.700">
      <Th width="5%">ID</Th>
      <Th width="5%">Letra</Th>
      <Th width="15%">Numero</Th>
      <Th width="25%">Curso</Th>
      <Th width="25%">Status</Th>
      <Th width="15%">Ação</Th>
    </Thead>
  );
}
