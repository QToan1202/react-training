import { Suspense, lazy, useMemo } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { FiHome, FiPlus } from 'react-icons/fi'
import { shallow } from 'zustand/shallow'
import { AbsoluteCenter, Box, ChakraProvider, Spinner } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { useAuthStore } from '@react-monorepo/stores'
import { ISideBarItem } from '@react-monorepo/types'
import { default as theme } from '@react-monorepo/themes'

const NavbarLayout = lazy(() => import('@react-monorepo/ui').then((module) => ({ default: module.NavbarLayout })))
const BookDetail = lazy(() => import('@react-monorepo/ui').then((module) => ({ default: module.BookDetail })))
const DashboardLayout = lazy(() => import('@react-monorepo/ui').then((module) => ({ default: module.DashboardLayout })))
const LoginPage = lazy(() => import('@react-monorepo/ui').then((module) => ({ default: module.Login })))
const RegisterPage = lazy(() => import('@react-monorepo/ui').then((module) => ({ default: module.Register })))

const AdminDashboard = lazy(() => import('../pages').then((module) => ({ default: module.AdminDashboard })))
const EditBookPage = lazy(() => import('../pages').then((module) => ({ default: module.EditBook })))
const AddBookPage = lazy(() => import('../pages').then((module) => ({ default: module.AddBook })))
const EditMemberPage = lazy(() => import('../pages').then((module) => ({ default: module.EditMember })))

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000 * 60 * 10 },
  },
})

const App = () => {
  const { authUser } = useAuthStore((state) => ({ authUser: state.user }), shallow)

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme} toastOptions={{ defaultOptions: { position: 'bottom', duration: 3000, isClosable: true } }}>
        <Suspense fallback={<OverlayLoading />}>
          <Routes>
            {authUser ? (
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
    <Route path="*" element={<NavbarLayout />}>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="*" element={<Navigate to="login" />} />
    </Route>
  </Routes>
)

const PrivateRoutes = () => {
  const sidebarContent: ISideBarItem[] = useMemo(
    () => [
      { name: 'Home', icon: FiHome, href: 'dashboard' },
      { name: 'Add book', icon: FiPlus, href: 'add-book' },
    ],
    []
  )

  return (
    <Routes>
      <Route path="/admin" element={<DashboardLayout sidebar={sidebarContent} />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="add-book" element={<AddBookPage />} />
        <Route path="edit-book/:bookId" element={<EditBookPage />} />
        <Route path="edit-member/:userId" element={<EditMemberPage />} />
        <Route path="books/:bookId" element={<BookDetail />} />
      </Route>
      <Route path="*" element={<Navigate to="admin/dashboard" />} />
    </Routes>
  )
}

const OverlayLoading = () => (
  <Box position="relative" h="100vh" bgColor='black' opacity={0.5}>
    <AbsoluteCenter axis="both">
      <Spinner thickness="4px" speed="0.65s" color='primary' size="xl" />
    </AbsoluteCenter>
  </Box>
)

export default App
