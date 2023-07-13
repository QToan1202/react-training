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
import { COLORS } from '@practice-three/modules/shared/utils'
import { FiChevronDown, FiMenu } from 'react-icons/fi'

export interface HeaderProps {
  onOpen: () => void
}

export function Header({ onOpen }: HeaderProps) {
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
                <Text fontSize="sm">Justina Clark</Text>
                <Text fontSize="xs" color="gray.600">
                  Admin
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
}

export default Header
