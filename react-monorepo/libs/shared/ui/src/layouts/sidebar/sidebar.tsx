import { memo, useCallback } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { AspectRatio, Box, BoxProps, Button, CloseButton, Flex, Link, Image, useToast } from '@chakra-ui/react'
import { FiLogOut } from 'react-icons/fi'
import { shallow } from 'zustand/shallow'

import { useBookStore, useHiredStore, useUserStore } from '@react-monorepo/shared/stores'
import { COLORS } from '@react-monorepo/shared/utils'
import { ISideBarItem } from '@react-monorepo/shared/types'
import { SidebarItem } from '../../components'
import logo from '../../../assets/images/library-logo.png'

export interface SidebarProps extends BoxProps {
  onClose: () => void
  items: ISideBarItem[]
}

export const Sidebar = memo(({ onClose, items, ...rest }: SidebarProps) => {
  const toast = useToast()
  const { logOut } = useUserStore((state) => ({ logOut: state.logout }), shallow)
  const handleLogOut = useCallback(() => {
    logOut()
    useUserStore.persist.clearStorage()
    useBookStore.persist.clearStorage()
    useHiredStore.persist.clearStorage()
    toast({
      title: 'Log out success',
      description: 'Hope to see you soon.',
      status: 'success',
    })
  }, [logOut, toast])

  return (
    <Flex
      flexDir="column"
      justifyContent="space-between"
      pos="fixed"
      zIndex={3}
      py={5}
      bg={COLORS.GRAY}
      minW={{ base: 'full', md: 60 }}
      minH="full"
      {...rest}
    >
      <Box>
        <Flex h="20" alignItems="center" mx="7" justifyContent="space-between">
          <Link as={RouterLink} to="/">
            <AspectRatio ratio={2.8 / 1} minW="140px">
              <Image objectFit="cover" src={logo} />
            </AspectRatio>
          </Link>
          <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
        </Flex>
        {items.map((item: ISideBarItem) => (
          <SidebarItem key={item.name} icon={item.icon} title={item.name} to={item.href} />
        ))}
      </Box>
      <Button
        onClick={handleLogOut}
        leftIcon={<FiLogOut />}
        mx={5}
        borderWidth={2}
        borderColor={COLORS.PRIMARY}
        bgColor={COLORS.PRIMARY}
        color={COLORS.WHITE}
        _hover={{
          bgColor: COLORS.WHITE,
          color: COLORS.PRIMARY,
        }}
      >
        Log Out
      </Button>
    </Flex>
  )
})
