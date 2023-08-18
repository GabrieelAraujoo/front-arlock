import { Tbody, Td } from "@chakra-ui/react";

export function BodyListAprovacao({ aprovacao }){
    return(
        <Tbody fontSize="13px" paddingTop="12px" paddingBottom="1px">
            <Td width="10%">{aprovacao.armario}</Td>
            <Td width="25%">{aprovacao.aluno}</Td>
            <Td width="15%">{aprovacao.rm}</Td>
            <Td width="15%">{aprovacao.curso}</Td>
            <Td width="25%">{aprovacao.pagamento}</Td>
        </Tbody>    
 );
}