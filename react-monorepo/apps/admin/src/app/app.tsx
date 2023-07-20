import { Route, Routes } from 'react-router-dom'
import { FiHome, FiLogOut, FiPlus } from 'react-icons/fi'
import { shallow } from 'zustand/shallow'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { BookDetail, Dashboard, LoginPage, RegisterPage } from '@react-monorepo/shared/ui'
import { useUserStore } from '@react-monorepo/shared/stores'
import { AdminDashboard, EditBookPage, AddBookPage, EditMemberPage } from '../pages'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000 * 60 * 10 },
  },
})

const sidebarContent = [
  { name: 'Home', icon: FiHome, href: 'dashboard' },
  { name: 'Add book', icon: FiPlus, href: 'add-book' },
  { name: 'Log out', icon: FiLogOut, href: '/' },
]

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
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
  </Routes>
)

const PrivateRoutes = () => (
  <Routes>
    <Route path="/admin" element={<Dashboard sidebar={sidebarContent} />}>
      <Route path="dashboard" element={<AdminDashboard />} />
      <Route path="add-book" element={<AddBookPage />} />
      <Route path="edit-book/:bookId" element={<EditBookPage />} />
      <Route path="edit-member/:userId" element={<EditMemberPage />} />
      <Route path="books/:bookId" element={<BookDetail />} />
    </Route>
  </Routes>
)
