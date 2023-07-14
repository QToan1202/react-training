import { useCallback } from 'react'
import { Box, Button, useToast } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'

import { LoginForm, Navbar } from '../../layouts'
import { useUserStore } from '@react-monorepo/shared/stores'
import { TUserForm } from '@react-monorepo/shared/types'
import { login } from '@react-monorepo/shared/services'
import { COLORS } from '@react-monorepo/shared/utils'

const navbarLink = ['pricing', 'support', 'contact Us']

export const LoginPage = () => {
  const setLoginUser = useUserStore((state) => state.login)
  const toast = useToast()
  const navigate = useNavigate()
  const handleSubmit = useCallback(
    async (values: TUserForm) => {
      try {
        const user = await login('/users', values.email, values.password)
        setLoginUser(user)
        toast({
          title: 'Login success',
          description: 'Welcome back!',
          status: 'success',
        })
        navigate('/dashboard')
      } catch (error) {
        if (error instanceof Error)
          toast({
            title: error.message,
            description: 'Please check your entered information.',
            status: 'error',
          })

        return null
      }
    },
    [setLoginUser, toast, navigate]
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
