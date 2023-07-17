import { FiHome, FiLogOut, FiPlus } from 'react-icons/fi'
import { Box, useDisclosure } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

import { Drawer, Header, Sidebar } from '../../layouts'

const data = [
  { name: 'Home', icon: FiHome, href: '/next' },
  { name: 'Add book', icon: FiPlus, href: '/add-book' },
  { name: 'Log out', icon: FiLogOut, href: '/' },
]

export const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box>
      <Sidebar onClose={onClose} items={data} display={{ base: 'none', md: 'block' }} />
      <Drawer isOpen={isOpen} onClose={onClose}>
        <Sidebar onClose={onClose} items={data} />
      </Drawer>
      <Header onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }}>
        <Outlet />
      </Box>
    </Box>
  )
}
