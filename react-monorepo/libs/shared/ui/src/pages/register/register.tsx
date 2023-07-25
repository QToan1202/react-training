import { useCallback, useEffect } from 'react'
import { Box, Heading, Text, useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { shallow } from 'zustand/shallow'

import { useAuthStore } from '@react-monorepo/shared/stores'
import { TUserForm } from '@react-monorepo/shared/types'
import { useRegisterUser } from '@react-monorepo/shared/hooks'
import { RegisterForm } from '../../layouts'
import { Loading } from '../../components'

const Register = () => {
  const { setLoginUser } = useAuthStore((state) => ({ setLoginUser: state.login }), shallow)
  const { mutate, isLoading, error, isSuccess, data } = useRegisterUser()
  const toast = useToast()
  const navigate = useNavigate()

  useEffect(() => {
    if (isSuccess) {
      setLoginUser(data)
      toast({
        title: 'Account created.',
        description: "We've created your account for you.",
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
        user: values,
      })
    },
    [mutate]
  )

  if (isLoading) return <Loading />

  return (
    <>
      <Heading textAlign="center" fontWeight="black" fontSize="70px">
        Sign up now!
      </Heading>
      <Text textAlign="center" fontWeight="light" fontSize="30px">
        Check out our library, we have everything from everywhere.
      </Text>
      <Box mt={20}>
        <RegisterForm onSubmit={handleSubmit} />
      </Box>
    </>
  )
}

export default Register
