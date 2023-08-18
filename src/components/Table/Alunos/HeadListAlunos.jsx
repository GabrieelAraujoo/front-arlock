import { Thead, Th } from "@chakra-ui/react";

export function HeadListAlunos() {
  return (
    <Thead borderBottom="1px" borderBottomColor="gray.700">
      <Th width="25%">RM</Th>
      <Th width="25%">Nome</Th>
      <Th width="25%">Curso</Th>
      <Th width="25%">Ação</Th>
    </Thead>
  );
}
