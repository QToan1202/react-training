import { useCallback, useEffect } from 'react'
import { Box, Button, Heading, Text, useToast } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import { shallow } from 'zustand/shallow'

import { useAuthStore } from '@react-monorepo/shared/stores'
import {  TUserForm } from '@react-monorepo/shared/types'
import { COLORS } from '@react-monorepo/shared/utils'
import { useRegisterUser } from '@react-monorepo/shared/hooks'
import { Navbar, RegisterForm } from '../../layouts'
import { Loading } from '../../components'
import backgroundImg from '../../../assets/images/squiggle-pattern-gray.webp'

const navbarLink = ['pricing', 'support', 'contact Us']

export const RegisterPage = () => {
  const {setLoginUser} = useAuthStore((state) => ({setLoginUser: state.login}), shallow)
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
      <Heading textAlign="center" fontWeight="black" fontSize="70px">
        Sign up now!
      </Heading>
      <Text textAlign="center" fontWeight="light" fontSize="30px">
        Check out our library, we have everything from everywhere.
      </Text>
      <Box mt={20}>
        <RegisterForm onSubmit={handleSubmit} />
      </Box>
    </Box>
  )
}
