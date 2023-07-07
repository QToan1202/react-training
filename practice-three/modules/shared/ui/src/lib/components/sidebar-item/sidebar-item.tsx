import React, { useCallback, useState } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { COLORS } from '@practice-three/modules/shared/utils'

export interface SidebarItemProps {
  to: string
  title: string
  icon: React.ReactNode
}

export function SidebarItem({ title, to, icon }: SidebarItemProps) {
  const [isHovered, SetIsHovered] = useState(false)
  const handleHoverItem = useCallback(() => {
    SetIsHovered((prevState) => !prevState)
  }, [])

  return (
    <Box
      bg={COLORS.WHITE}
      color={COLORS.BLACK}
      as={motion.div}
      onHoverStart={handleHoverItem}
      onHoverEnd={handleHoverItem}
    >
      <Flex
        columnGap="5px"
        as={motion.div}
        alignItems="center"
        whileHover={{
          x: 30,
        }}
      >
        <Box as={motion.div} animate={{ x: isHovered ? 0 : -100 }}>
          {icon}
        </Box>
        <Link to={to}>{title}</Link>
      </Flex>
    </Box>
  )
}

export default SidebarItem
