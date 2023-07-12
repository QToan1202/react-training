import { useCallback } from 'react'
import { Box, Text, useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

import { Navbar, RegisterForm } from '../../layouts'
import { register } from '@practice-three/modules/shared/services'
import { FormValues } from '@practice-three/modules/shared/types'
import { useUserStore } from '@practice-three/modules/shared/store'

export function RegisterPage() {
  const setLoginUser = useUserStore((state) => state.login)
  const toast = useToast()
  const navigate = useNavigate()
  const handleSubmit = useCallback(
    async (values: FormValues) => {
      try {
        const user = await register('/users', values)
        setLoginUser(user)
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
        })
        navigate('/dashboard')
      } catch (error) {
        if (error instanceof Error)
          return toast({
            title: error.message,
            description: 'Please check your entered information.',
            status: 'error',
          })
      }
    },
    [setLoginUser, toast, navigate]
  )

  return (
    <Box h="100vh" bgImage="/modules/shared/ui/assets/images/squiggle-pattern-gray.jpg">
      <Navbar />
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

export default RegisterPage
