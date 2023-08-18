import { Thead, Th } from "@chakra-ui/react";

export function HeadListAprovacao() {
    return (
      <Thead borderBottom="1px" borderBottomColor="gray.700">
        <Th width="10%">Armario</Th>
        <Th width="15%">Aluno</Th>
        <Th width="25%">RM</Th>
        <Th width="25%">Curso</Th>
        <Th width="15%">Pagamento</Th>
        <Th width="15%">Ação</Th>
      </Thead>
    );
  }