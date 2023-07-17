import { ChakraProvider } from '@chakra-ui/react'
import { LoginPage } from '@react-monorepo/shared/ui'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Route, Routes } from 'react-router-dom'

const queryClient = new QueryClient()

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider toastOptions={{ defaultOptions: { position: 'bottom', duration: 3000, isClosable: true } }}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </ChakraProvider>
    </QueryClientProvider>
  )
}
