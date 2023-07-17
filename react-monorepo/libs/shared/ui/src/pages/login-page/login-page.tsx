import { useCallback } from 'react'
import { Box, Button, useToast } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'

import { LoginForm, Navbar } from '../../layouts'
import { useUserStore } from '@react-monorepo/shared/stores'
import { IUser, TUserForm } from '@react-monorepo/shared/types'
import { login } from '@react-monorepo/shared/services'
import { COLORS } from '@react-monorepo/shared/utils'

const navbarLink = ['pricing', 'support', 'contact Us']

export const LoginPage = () => {
  const setLoginUser = useUserStore((state) => state.login)
  const toast = useToast()
  const navigate = useNavigate()

  const { mutate } = useMutation({
    mutationFn: (variables: { path: string; email: string; password: string }): Promise<IUser> =>
      login(variables.path, variables.email, variables.password),

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
        title: 'Login success',
        description: 'Welcome back!',
        status: 'success',
      })
      // navigate('/dashboard')
    },
  })

  const handleSubmit = useCallback(
    (values: TUserForm) => {
      mutate({
        path: '/users',
        email: values.email,
        password: values.password,
      })
    },
    [mutate]
  )

  return (
    <Box h="100vh" bgImage="/libs/shared/ui/assets/images/squiggle-pattern-gray.jpg">
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
      <Box mt={50}>
        <LoginForm onSubmit={handleSubmit} />
      </Box>
    </Box>
  )
}
