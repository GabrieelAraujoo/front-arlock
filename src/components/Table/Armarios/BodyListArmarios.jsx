import { Tbody, Td } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";


export function BodyListArmarios({ armarios }){
    return(
        <Tbody fontSize="13px" paddingTop="12px" paddingBottom="1px">
            <Td width="10%">{armarios.letra}</Td>
            <Td width="15%">{armarios.quantidade}</Td>
            <Td width="25%">{armarios.curso}</Td>
            <Td width="15%">{armarios.manutencao}</Td>
            <Td width="15%">{armarios.alugados}</Td>
            <Td><DeleteIcon 
                    marginLeft="9px"
                    height="20px"
                    width="20px"
                    color="gray.400"/>
            </Td>
        </Tbody>    
 );
}

