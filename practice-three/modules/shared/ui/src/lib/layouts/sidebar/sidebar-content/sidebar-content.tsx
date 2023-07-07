import { Box, BoxProps, CloseButton, Flex, Text } from '@chakra-ui/react'

import { COLORS, SidebarItemProps } from '@practice-three/modules/shared/utils'
import { SidebarItem } from '../../../components'

interface SidebarProps extends BoxProps {
  onClose: () => void
  items: ReadonlyArray<SidebarItemProps>
}

export function SidebarContent({ onClose, items, ...rest }: SidebarProps) {
  return (
    <Box pos="fixed" bg={COLORS.GRAY} minW={{ base: 'full', md: 60 }} minH="full" {...rest}>
      <Flex h="20" alignItems="center" mx="7" justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {items.map((link) => (
        <SidebarItem key={link.name} icon={link.icon} title={link.name} to="#" />
      ))}
    </Box>
  )
}
