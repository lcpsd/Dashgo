import { Box, Button, Divider, Flex, Heading, SimpleGrid, Stack, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { Input } from '../../components/Form/Input';
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form";

type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

const createUserFormSchema = yup.object({
    name: yup.string().required("Nome Obrigatório"),
    email: yup.string().required("E-mail obrigatório").email(),
    password: yup.string().required("Senha obrigatória").min(8),
    password_confirmation: yup.string().oneOf([null, yup.ref('password')], "Senhas diferentes")
})

export default function UsersList(){

    const {register, handleSubmit, formState:{errors, isSubmitting}} = useForm({
        resolver:yupResolver(createUserFormSchema)
    })

    function handleCreateUser(values: CreateUserFormData){

    }

    return(
        <Box>
            <Header/>
            <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
                <Sidebar/>
                <Box
                  as="form"
                  flex="1"
                  borderRadius={8}
                  bg="gray.800"
                  p="8"
                  onSubmit={handleSubmit(handleCreateUser)}
                  >
                    <Heading size="lg" fontWeight="normal">
                        Criar Usuário
                    </Heading>

                    <Divider my="6" borderColor="gray.700"/>

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth={240} spacing="8" w="100%">
                            <Input
                              name="name"
                              label="Nome Completo"
                              {...register("name")}
                              error={errors.name}
                              />

                            <Input
                              name="email"
                              label="E-mail"
                              type="email"
                              {...register("email")}
                              error={errors.email}
                              />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth={240} spacing="8" w="100%">
                            <Input
                              name="password"
                              type="password"
                              label="Senha"
                              {...register("password")}
                              error={errors.password}
                              />

                            <Input
                              name="password_confirmation"
                              label="Confirmação da senha"
                              type="password"
                              {...register("password_confirmation")}
                              error={errors.password_confirmation}
                              />
                        </SimpleGrid>
                            
                    </VStack>

                    <Flex mt="8" justify="flex-end" >
                        <Stack spacing="4"  direction={{sm: "column", lg:"row"}} w="100%">
                        <Link href="/users" passHref>
                            <Button colorScheme="whiteAlpha">Cancelar</Button>
                        </Link>
                            <Button isLoading={isSubmitting} colorScheme="pink" type="submit">Salvar</Button>
                        </Stack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}