import { Thead, Th } from "@chakra-ui/react";

export function HeadListAlunos() {
  return (
    <Thead borderBottom="1px" borderBottomColor="gray.700">
      <Th width="15%">RM</Th>
      <Th width="35%">Nome</Th>
      <Th width="40%">Curso</Th>
      <Th width="10%">Ação</Th>
    </Thead>
  );
}
