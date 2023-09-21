import { Thead, Th } from "@chakra-ui/react";

export function HeadListAprovados() {
    return (
      <Thead borderBottom="1px" borderBottomColor="gray.700">
        <Th width="15%">Armário</Th>
        <Th width="20%">Aluno</Th>
        <Th width="10%">RM</Th>
        <Th width="25%">Curso</Th>
        <Th width="15%">Pagamento</Th>
      </Thead>
    );
  }