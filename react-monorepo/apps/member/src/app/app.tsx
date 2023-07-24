import { Suspense, lazy, useMemo } from 'react'
import { FiHome } from 'react-icons/fi'
import { AbsoluteCenter, Box, ChakraProvider, Spinner } from '@chakra-ui/react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { shallow } from 'zustand/shallow'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { useUserStore } from '@react-monorepo/shared/stores'
import { ISideBarItem } from '@react-monorepo/shared/types'
import { COLORS } from '@react-monorepo/shared/utils'

const BookDetail = lazy(() => import('@react-monorepo/shared/ui').then((module) => ({ default: module.BookDetail })))
const Dashboard = lazy(() => import('@react-monorepo/shared/ui').then((module) => ({ default: module.Dashboard })))
const LoginPage = lazy(() => import('@react-monorepo/shared/ui').then((module) => ({ default: module.LoginPage })))
const RegisterPage = lazy(() => import('@react-monorepo/shared/ui').then((module) => ({ default: module.RegisterPage })))

const Home = lazy(() => import('../pages').then((module) => ({ default: module.Home })))

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
        <Suspense fallback={<OverlayLoading />}>
          <Routes>
            {loginUser ? (
              <Route path="/*" element={<PrivateRoutes />} />
            ) : (
              <Route path="/*" element={<PublicRoutes />} />
            )}
          </Routes>
        </Suspense>
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
  const sidebarContent: ISideBarItem[] = useMemo(() => [{ name: 'Home', icon: FiHome, href: '/' }], [])

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

const OverlayLoading = () => (
  <Box position="relative" h="100vh" bgColor={COLORS.BLACK} opacity={0.5}>
    <AbsoluteCenter axis="both">
      <Spinner thickness="4px" speed="0.65s" color={COLORS.PRIMARY} size="xl" />
    </AbsoluteCenter>
  </Box>
)