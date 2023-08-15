import React from "react";
import { Main } from "../../../layout/Main";
import { Container } from "../../../layout/Container";
import { Flex, Text } from "@chakra-ui/react";
import PageTitle from "../../../components/PageTitle";
import { SearchIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer } from '@chakra-ui/react'

function Alunos(){
    return(
        <Main>
            <Container>
                <Flex width="full" padding="2rem" direction="column" textColor="#558085">
                    <PageTitle title={"Pessoas > Alunos"} />

                    <Flex backgroundColor="white.100"
                        width="full"
                        height="280px"
                        borderRadius="15px"
                        alignItems="flex-start"
                        marginTop="1rem"
                        direction="column"
                        >
                            <Text fontSize="35px" textColor="#558085" fontWeight="bold" marginLeft="1.3rem" marginTop="1.3rem">
                            Alunos
                            </Text>  

                            <Flex bgColor="gray.200" padding="10px" width="240px" height="50px" marginLeft="1.3rem" marginTop="1rem" borderRadius="12px" 
                                  direction="column" border="1px" borderColor="gray.300">

                                  <Flex> 

                                  <SearchIcon marginTop="5px" marginLeft="5px"/>  

                                  <Text fontSize="15px" marginLeft="10px" marginTop="2px" fontWeight="bold"> Pesquisar </Text>

                                  </Flex>       
                                                            
                            </Flex>

                    </Flex>          

                </Flex>
            </Container>
        </Main>
 );
}

export default Alunos;