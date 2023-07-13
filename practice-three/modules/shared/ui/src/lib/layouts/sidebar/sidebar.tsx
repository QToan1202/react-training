import { Drawer, DrawerContent } from '@chakra-ui/react'

import { SidebarContent } from './sidebar-content/sidebar-content'
import { ITEMS } from '@practice-three/modules/shared/utils'

export interface SideBarProps {
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({ isOpen, onClose }: SideBarProps) {

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
    </>
  )
}

export default Sidebar
