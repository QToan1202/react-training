import { useCallback } from 'react'
import { Box, useToast } from '@chakra-ui/react'
import  { useNavigate } from 'react-router-dom'

import { LoginForm, Navbar } from '../../layouts'
import { FormValues } from '@practice-three/modules/shared/types'
import { useUserStore } from '@practice-three/modules/shared/store'
import { login } from '@practice-three/modules/shared/services'

export function LoginPage() {
  const setLoginUser = useUserStore((state) => state.login)
  const toast = useToast()
  const navigate = useNavigate()
  const handleSubmit = useCallback(
    async (values: FormValues) => {
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
    <Box h="100vh" bgImage="/modules/shared/ui/assets/images/squiggle-pattern-gray.jpg">
      <Navbar />
      <Box mt={50}>
        <LoginForm onSubmit={handleSubmit} />
      </Box>
    </Box>
  )
}

export default LoginPage
