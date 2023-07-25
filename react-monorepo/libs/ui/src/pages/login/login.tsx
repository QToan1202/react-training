import { useCallback, useEffect } from 'react'
import { Box, useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { shallow } from 'zustand/shallow'

import { LoginForm } from '../../layouts'
import { useAuthStore } from '@react-monorepo/stores'
import { TUserForm } from '@react-monorepo/types'
import { useLoginUser } from '@react-monorepo/hooks'
import { Loading } from '../../components'

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
    <Box mt={50}>
      <LoginForm onSubmit={handleSubmit} />
    </Box>
  )
}

export default Login
