import { memo, useCallback } from 'react'
import { AspectRatio, Box, BoxProps, Button, CloseButton, Flex, Link, Image, useToast } from '@chakra-ui/react'
import { FiLogOut } from 'react-icons/fi'
import { shallow } from 'zustand/shallow'

import { useBookStore, useHiredStore, useUserStore } from '@react-monorepo/shared/stores'
import { COLORS } from '@react-monorepo/shared/utils'
import { ISideBarItem } from '@react-monorepo/shared/types'
import { SidebarItem } from '../../components'

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
  )
})
