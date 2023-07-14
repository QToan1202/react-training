import { ChakraProvider } from '@chakra-ui/react'
import { LoginPage } from '@react-monorepo/shared/ui'
import { Route, Routes } from 'react-router-dom'

export const App = () => {
  return (
    <ChakraProvider toastOptions={{ defaultOptions: { position: 'bottom', duration: 3000, isClosable: true } }}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </ChakraProvider>
  )
}
