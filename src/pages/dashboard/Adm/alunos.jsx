import React from "react";
import { Main } from "../../../layout/Main";
import { Container } from "../../../layout/Container";
import { Flex, Text } from "@chakra-ui/react";
import PageTitle from "../../../components/PageTitle";
import { SearchIcon, UnlockIcon, LockIcon } from "@chakra-ui/icons";
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer } from '@chakra-ui/react'

function Alunos(){
    return(
        <Main>
            <Container>
                <Flex width="full" padding="2rem" direction="column" textColor="#558085">
                    <PageTitle title={"Pessoas > Alunos"} />

                    <Flex backgroundColor="white.100"
                        width="full"
                        height="470px"
                        borderRadius="15px"
                        alignItems="flex-start"
                        marginTop="1rem"
                        direction="column"
                        >
                            <Text fontSize="35px" textColor="#558085" fontWeight="bold" marginLeft="1.3rem" marginTop="1.3rem">
                            Alunos
                            </Text>  

                            <Flex bgColor="gray.200" padding="10px" width="21%" height="45px" marginLeft="1.3rem" marginTop="1rem" borderRadius="12px" 
                                  direction="column" border="1px" borderColor="gray.300">

                                  <Flex> 

                                  <SearchIcon marginTop="5px" marginLeft="5px"/>  

                                  <Text fontSize="15px" marginLeft="10px" marginTop="2px" fontWeight="bold"> Pesquisar </Text>

                                  </Flex>       

                                  <Flex marginTop="3rem" direction="column">

                                    <Table>
                                        <Thead borderBottom="1px" borderBottomColor="gray.700">
                                            <Th paddingRight="90px">RM</Th>
                                            <Th paddingRight="130px">Nome</Th>
                                            <Th paddingRight="40rem">Curso</Th>
                                            <Th>Ação</Th>
                                        </Thead>
                                        <Tbody fontSize="13px" paddingTop="12px" paddingBottom="1px">
                                            <Td>12345</Td>
                                            <Td>John Deo</Td>
                                            <Td>Desenvolvimento de Sistemas</Td>
                                            <Td ><UnlockIcon marginLeft="9px" height="20px" width="20px" color="gray.400"/></Td>
                                        </Tbody>
                                        <Tbody fontSize="13px" paddingTop="12px" paddingBottom="1px">
                                            <Td>54321</Td>
                                            <Td>Deo John</Td>
                                            <Td>Sistemas de Desenvolvimento</Td>
                                            <Td><LockIcon marginLeft="9px" height="20px" width="20px" color="black"/></Td>
                                        </Tbody>
                                    </Table>

                                  </Flex>
                                                            
                            </Flex>

                    </Flex>          

                </Flex>
            </Container>
        </Main>
 );
}

export default Alunos;