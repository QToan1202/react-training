import { Drawer, DrawerContent, useDisclosure } from '@chakra-ui/react'

import Header from '../header/header'
import { SidebarContent } from './sidebar-content/sidebar-content'
import { ITEMS } from '@practice-three/modules/shared/utils'

export function Sidebar() {
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <>
      <SidebarContent items={ITEMS} onClose={onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        size="full"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        placement="left"
      >
        <DrawerContent>
          <SidebarContent items={ITEMS} onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <Header onOpen={onOpen} />
    </>
  )
}

export default Sidebar
