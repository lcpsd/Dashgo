import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { useState } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UsersList(){

    const [showEdit, setShowEdit] = useState(false)

    return(
        <Box>
            <Header/>
            <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
                <Sidebar/>
                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">
                            Usuários
                        </Heading>

                        <Button
                          as="a"
                          size="sm"
                          fontSize="sm"
                          colorScheme="pink"
                          leftIcon={<Icon
                          as={RiAddLine}/>}>
                            Criar Novo
                        </Button>
                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px="6" color="gray.300" width="8">
                                    <Checkbox colorScheme="pink"/>
                                </Th>

                                <Th>
                                    Usuário
                                </Th>

                                <Th>Data de Cadastro</Th>

                                <Th width="8">Ações</Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            <Tr>
                                <Td px="0">
                                    <Checkbox colorScheme="pink" px="6"/>
                                </Td>

                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Lucas Cardoso</Text>
                                        <Text fontSize="sm" color="gray.300">lucascardosopsd@gmail.com</Text>
                                    </Box>
                                </Td>

                                <Td>21 de Fevereiro, 2022</Td>

                                <Td>
                                    
                                    {
                                        showEdit &&
                                        <Button
                                        as="a"
                                        size="sm"
                                        colorScheme="purple"
                                        leftIcon={<Icon as={RiPencilLine} fontSize="18"/>}
                                        >
                                            Editar
                                        </Button>
                                    }
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination/>
                </Box>
            </Flex>
        </Box>
    )
}