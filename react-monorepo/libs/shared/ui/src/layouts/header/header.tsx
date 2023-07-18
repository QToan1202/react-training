import { memo } from 'react'
import {
  Avatar,
  Box,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from '@chakra-ui/react'
import { FiChevronDown, FiMenu } from 'react-icons/fi'
import { shallow } from 'zustand/shallow'

import { COLORS } from '@react-monorepo/shared/utils'
import { useUserStore } from '@react-monorepo/shared/stores'

export interface HeaderProps {
  onOpen: () => void
}

export const Header = memo(({ onOpen }: HeaderProps) => {
  const { user } = useUserStore((state) => ({ user: state.loginUser }), shallow)

  return (
    <Flex
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      alignItems="center"
      borderBottomWidth="1px"
      borderBottomColor={COLORS.GRAY_100}
      p="16px"
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        aria-label="open menu"
        bg={COLORS.WHITE}
        border={`2px solid ${COLORS.GRAY}`}
        icon={<FiMenu />}
        onClick={onOpen}
      />
      <Text display={{ md: 'none' }} fontSize="2xl" fontWeight="bold">
        Logo
      </Text>

      <Flex alignItems="center">
        <Menu>
          <MenuButton py={2}>
            <HStack>
              <Avatar src="https://bit.ly/dan-abramov" size="sm" />
              <VStack display={{ base: 'none', md: 'flex' }} alignItems="flex-start" spacing="1px" ml={2}>
                <Text fontSize="sm">{`${user?.firstName} ${user?.lastName}`}</Text>
                <Text fontSize="xs" color="gray.600" textTransform="capitalize">
                  {user?.role}
                </Text>
              </VStack>
              <Box display={{ base: 'none', md: 'flex' }}>
                <FiChevronDown />
              </Box>
            </HStack>
          </MenuButton>
          <MenuList bg={COLORS.WHITE}>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Billing</MenuItem>
            <MenuDivider />
            <MenuItem>Sign out</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  )
})
