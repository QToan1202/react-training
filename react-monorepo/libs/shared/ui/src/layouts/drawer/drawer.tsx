import React, { memo } from 'react'
import { Drawer as ChakraDrawer, DrawerContent } from '@chakra-ui/react'

export interface DrawerProps {
  isOpen: boolean
  children: React.ReactNode
  onClose: () => void
}

const Drawer = memo(({ isOpen, onClose, children }: DrawerProps) => {
  return (
    <ChakraDrawer
      autoFocus={false}
      isOpen={isOpen}
      size="full"
      onClose={onClose}
      returnFocusOnClose={false}
      onOverlayClick={onClose}
      placement="left"
    >
      <DrawerContent>
        {children}
      </DrawerContent>
    </ChakraDrawer>
  )
})

export default Drawer
