import { Thead, Th } from "@chakra-ui/react";

export function HeadListUsuarios() {
  return (
    <Thead borderBottom="1px" borderBottomColor="gray.700" >
      <Th width="25%">ID</Th>
      <Th width="25%">Nome</Th>
      <Th width="25%">Email</Th>
    </Thead>
  );
}