import { Box, useDisclosure } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

import { Header, Sidebar } from '../../layouts'

export function Dashboard() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box>
      <Sidebar isOpen={isOpen} onClose={onClose} />
      <Header onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }}>
        <Outlet />
      </Box>
    </Box>
  )
}

export default Dashboard
