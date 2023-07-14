import { memo, useState, useCallback } from 'react'
import { Box, Flex, Icon } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { IconType } from 'react-icons/lib'
import { Link } from 'react-router-dom'

import { COLORS } from '@react-monorepo/shared/utils'

export interface SidebarItemProps {
  to: string
  title: string
  icon: IconType
}

export const SidebarItem = memo(({ title, to, icon }: SidebarItemProps) => {
  const [isHovered, SetIsHovered] = useState(false)
  const handleHoverItem = useCallback(() => {
    SetIsHovered((prevState) => !prevState)
  }, [])

  return (
    <Box
      bg="transparent"
      color={COLORS.BLACK}
      as={motion.div}
      onHoverStart={handleHoverItem}
      onHoverEnd={handleHoverItem}
      _hover={{
        bg: COLORS.WHITE,
      }}
    >
      <Flex
        columnGap="5px"
        py={4}
        as={motion.div}
        alignItems="center"
        whileHover={{
          x: 30,
        }}
      >
        <Box as={motion.div} display="flex" animate={{ x: isHovered ? 0 : -100 }}>
          <Icon as={icon} boxSize={6} color={COLORS.PRIMARY} />
        </Box>
        <Link to={to}>{title}</Link>
      </Flex>
    </Box>
  )
})
