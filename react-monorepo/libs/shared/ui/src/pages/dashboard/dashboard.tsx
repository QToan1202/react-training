import { Box, useDisclosure } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

import { Drawer, Header, Sidebar } from '../../layouts'
import { ISideBarItem } from '@react-monorepo/shared/types'

export interface DashboardProps {
  sidebar: ISideBarItem[]
}

const Dashboard = ({ sidebar }: DashboardProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box>
      <Sidebar onClose={onClose} items={sidebar} display={{ base: 'none', md: 'flex' }} />
      <Drawer isOpen={isOpen} onClose={onClose}>
        <Sidebar onClose={onClose} items={sidebar} />
      </Drawer>
      <Header onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }}>
        <Outlet />
      </Box>
    </Box>
  )
}

export default Dashboard
