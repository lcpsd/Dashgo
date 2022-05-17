import { Button, Flex, Stack } from "@chakra-ui/react";
import {useForm, SubmitHandler} from "react-hook-form"
import { Input } from '../components/Form/Input';
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object({
  email: yup.string().required("E-mail obrigatório").email(),
  password: yup.string().required("Senha obrigatória")
})

export default function SignIn() {

  const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const handleSignIn: SubmitHandler<SignInFormData> = (values, event) => {
    
  }

  return (
    <Flex
      w={'100vw'}
      h={'100vh'}
      align={'center'}
      justify={'center'}>
        <Flex
          as="form"
          width={"100%"}
          maxWidth={360}
          bg="gray.800"
          p="8"
          borderRadius={8}
          flexDir="column"
          onSubmit={handleSubmit(handleSignIn)}
          >
            <Stack spacing={2}>

              <Input
                type="email"
                name="email"
                label="E-mail"
                error={errors.email}
                {...register('email')} />

              <Input
                type="password"
                name="password"
                label="Senha"
                error={errors.password}
                {...register('password')} />

              <Button
                type="submit"
                mt="6"
                colorScheme="pink"
                size="lg"
                isLoading={isSubmitting}
                >
                  Entrar
                </Button>
            </Stack>
        </Flex>
      </Flex>
  )
}
