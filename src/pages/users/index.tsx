import { Box, Button, Checkbox, Flex, Heading, Icon, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { useQuery } from "react-query";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/axios/api";

export default function UsersList(){

    const {isLoading, isFetching, error, data} = useQuery('users', async () => {
        const {data} = await api.get('users')

        const users = data.users.map(user => {
            return {
                id: user.id,
                name: user.name,
                email: user.email,
                createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                })
            }
        })
        
        return users
    })

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return(
        <Box>
            <Header/>
            <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
                <Sidebar/>
                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">
                            Usuários
                            {
                                !isLoading && isFetching &&
                                <Spinner size='sm' color='gray.500' ml='4'/>
                            }
                        </Heading>

                        <Link href="/users/create" passHref>
                            <Button
                            as="a"
                            size="sm"
                            fontSize="sm"
                            colorScheme="pink"
                            leftIcon={<Icon
                            as={RiAddLine}/>}>
                                Criar Novo
                            </Button>
                        </Link>
                    </Flex>
                    
                    {
                        isLoading &&
                        <Flex align="center" justify="center">
                            <Spinner/>
                        </Flex>
                    }

                    {
                        error &&
                        <Flex align='center' justify='center'>
                            <Text>Falha ao obter dados dos usuários</Text>
                        </Flex>
                    }

                    {
                        !isLoading && !error &&
                        <>
                            <Table colorScheme="whiteAlpha">
                                <Thead>
                                    <Tr>
                                        <Th px="6" color="gray.300" width="8">
                                            <Checkbox colorScheme="pink"/>
                                        </Th>

                                        <Th>
                                            Usuário
                                        </Th>

                                        {isWideVersion && <Th>Data de Cadastro</Th>}

                                        {isWideVersion && <Th width="8">Ações</Th>}
                                    </Tr>
                                </Thead>

                                <Tbody>
                                    {
                                        data.map(user => (
                                            <Tr>
                                                <Td px="0">
                                                    <Checkbox colorScheme="pink" px="6"/>
                                                </Td>

                                                <Td>
                                                    <Box>
                                                        <Text fontWeight="bold">{user.name}</Text>
                                                        <Text fontSize="sm" color="gray.300">{user.email}</Text>
                                                    </Box>
                                                </Td>

                                                {isWideVersion && <Td>{user.createdAt}</Td>}

                                                {
                                                    isWideVersion &&
                                                    <Td>
                                                    <Button
                                                    as="a"
                                                    size="sm"
                                                    colorScheme="purple"
                                                    leftIcon={<Icon as={RiPencilLine} fontSize="18"/>}
                                                    >
                                                        Editar
                                                    </Button>
                                                </Td>
                                                }
                                            </Tr>
                                        ))
                                    }
                                </Tbody>
                            </Table>
                            <Pagination/>
                        </>
                    }

                </Box>
            </Flex>
        </Box>
    )
}