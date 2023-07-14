import { memo } from 'react'
import { Box, BoxProps, CloseButton, Flex, Text } from '@chakra-ui/react'

import { COLORS } from '@react-monorepo/shared/utils'
import { ISideBarItem } from '@react-monorepo/shared/types'
import { SidebarItem } from '../../components'

export interface SidebarProps extends BoxProps {
  onClose: () => void
  items: ISideBarItem[]
}

export const Sidebar = memo(({ onClose, items, ...rest }: SidebarProps) => {
  return (
    <Box pos="fixed" zIndex={3} bg={COLORS.GRAY} minW={{ base: 'full', md: 60 }} minH="full" {...rest}>
      <Flex h="20" alignItems="center" mx="7" justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {items.map((item: ISideBarItem) => (
        <SidebarItem key={item.name} icon={item.icon} title={item.name} to={item.href} />
      ))}
    </Box>
  )
})
