import { useCallback, useEffect } from 'react'
import { Box, Button, useToast } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import { shallow } from 'zustand/shallow'

import { LoginForm, Navbar } from '../../layouts'
import { useAuthStore } from '@react-monorepo/shared/stores'
import { TUserForm } from '@react-monorepo/shared/types'
import { COLORS } from '@react-monorepo/shared/utils'
import { useLoginUser } from '@react-monorepo/shared/hooks'
import backgroundImg from '../../../assets/images/squiggle-pattern-gray.webp'
import { Loading } from '../../components'

const navbarLink = ['pricing', 'support', 'contact Us']

const Login = () => {
  const { setLoginUser } = useAuthStore((state) => ({ setLoginUser: state.login }), shallow)
  const { mutate, isLoading, error, isSuccess, data } = useLoginUser()
  const toast = useToast()
  const navigate = useNavigate()

  useEffect(() => {
    if (isSuccess) {
      setLoginUser(data)
      toast({
        title: 'Login success',
        description: 'Welcome back!',
        status: 'success',
      })
    }

    if (error instanceof Error)
      toast({
        title: error.message,
        description: 'Please check your entered information.',
        status: 'error',
      })
  }, [data, error, isSuccess, navigate, setLoginUser, toast])

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

  if (isLoading) return <Loading />

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
      <Box mt={50}>
        <LoginForm onSubmit={handleSubmit} />
      </Box>
    </Box>
  )
}

export default Login
