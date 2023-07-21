import { useMemo } from 'react'
import { FiHome } from 'react-icons/fi'
import { ChakraProvider } from '@chakra-ui/react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { shallow } from 'zustand/shallow'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { useUserStore } from '@react-monorepo/shared/stores'
import { BookDetail, Dashboard, LoginPage, RegisterPage } from '@react-monorepo/shared/ui'
import { ISideBarItem } from '@react-monorepo/shared/types'
import { Home } from '../pages'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000 * 60 * 10 },
  },
})

export const App = () => {
  const { loginUser } = useUserStore((state) => ({ loginUser: state.loginUser }), shallow)

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider toastOptions={{ defaultOptions: { position: 'bottom', duration: 3000, isClosable: true } }}>
        <Routes>
          {loginUser
          ? <Route path="/*" element={<PrivateRoutes />} />
          : <Route path="/*" element={<PublicRoutes />} />}
        </Routes>
      </ChakraProvider>
    </QueryClientProvider>
  )
}

const PublicRoutes = () => (
  <Routes>
    <Route path="login" element={<LoginPage />} />
    <Route path="register" element={<RegisterPage />} />
    <Route path="*" element={<Navigate to="login" />} />
  </Routes>
)

const PrivateRoutes = () => {
  const sidebarContent: ISideBarItem[] = useMemo(() => [
    { name: 'Home', icon: FiHome, href: '/' },
  ], [])

  return (
    <Routes>
      <Route path="/*" element={<Dashboard sidebar={sidebarContent} />}>
        <Route path="home" element={<Home />} />
        <Route path="books/:bookId" element={<BookDetail />} />
        <Route path="/*" element={<Navigate to="/home" />} />
      </Route>
    </Routes>
  )
}
