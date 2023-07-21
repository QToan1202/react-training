import { useCallback } from 'react'
import { Box, Button, Text, useToast } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'

import { Navbar, RegisterForm } from '../../layouts'
import { useUserStore } from '@react-monorepo/shared/stores'
import { IUser, TUserForm } from '@react-monorepo/shared/types'
import { COLORS } from '@react-monorepo/shared/utils'
import { register } from '@react-monorepo/shared/services'
import backgroundImg from '../../../assets/images/squiggle-pattern-gray.webp'

const navbarLink = ['pricing', 'support', 'contact Us']

export const RegisterPage = () => {
  const setLoginUser = useUserStore((state) => state.login)
  const toast = useToast()
  const navigate = useNavigate()

  const { mutate } = useMutation({
    mutationFn: (variables: { path: string; user: TUserForm }): Promise<IUser> =>
      register(variables.path, variables.user),

    onError: (error: unknown) => {
      if (error instanceof Error)
        toast({
          title: error.message,
          description: 'Please check your entered information.',
          status: 'error',
        })
    },

    onSuccess: (data: IUser) => {
      setLoginUser(data)
      toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
      })
      navigate('/')
    },
  })

  const handleSubmit = useCallback(
    (values: TUserForm) => {
      mutate({
        path: '/users',
        user: values,
      })
    },
    [mutate]
  )

  return (
    <Box h="100vh" bgImage={backgroundImg}>
      <Navbar>
        {navbarLink.map((item) => (
          <Button
            key={item}
            as={Link}
            to="#"
            textTransform="capitalize"
            variant="ghost"
            px={8}
            _hover={{ textDecor: 'underline', bgColor: COLORS.GRAY_100 }}
          >
            {item}
          </Button>
        ))}
      </Navbar>
      <Text textAlign="center" fontWeight="black" fontSize="70px">
        Sign up now!
      </Text>
      <Text textAlign="center" fontWeight="light" fontSize="30px">
        Check out our library, we have everything from everywhere.
      </Text>
      <Box mt={20}>
        <RegisterForm onSubmit={handleSubmit} />
      </Box>
    </Box>
  )
}
