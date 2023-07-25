import { memo, useCallback } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  AspectRatio,
  Avatar,
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react'
import { FiChevronDown, FiMenu } from 'react-icons/fi'
import { shallow } from 'zustand/shallow'

import { COLORS } from '@react-monorepo/shared/utils'
import { useUserStore } from '@react-monorepo/shared/stores'
import logo from '../../../assets/images/library-logo.webp'
export interface HeaderProps {
  onOpen: () => void
}

export const Header = memo(({ onOpen }: HeaderProps) => {
  const toast = useToast()
  const { user, logOut } = useUserStore((state) => ({ user: state.loginUser, logOut: state.logout }), shallow)
  const handleLogOut = useCallback(() => {
    logOut()
    useUserStore.persist.clearStorage()
    toast({
      title: 'Log out success',
      description: 'Hope to see you soon.',
      status: 'success',
    })
  }, [logOut, toast])

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

      <Link as={RouterLink} to="/" display={{ md: 'none' }}>
        <AspectRatio ratio={2.8 / 1} minW="140px">
          <Image objectFit="cover" src={logo} alt="logo of library website" />
        </AspectRatio>
      </Link>

      <Flex alignItems="center">
        <Menu>
          <MenuButton py={2}>
            <HStack>
              <Avatar name={`${user?.firstName}-${user?.lastName}-avatar`} src="https://bit.ly/dan-abramov" size="sm"  />
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
            <MenuItem onClick={handleLogOut}>Sign out</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  )
})
