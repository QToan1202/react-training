import { memo, useState, useCallback } from 'react'
import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { IconType } from 'react-icons/lib'
import { Link } from 'react-router-dom'
import isEqual from 'react-fast-compare'

import { COLORS } from '@react-monorepo/utils'

export interface SidebarItemProps {
  to: string
  title: string
  icon: IconType
}

const SidebarItem = memo(({ title, to, icon }: SidebarItemProps) => {
  const [isHovered, SetIsHovered] = useState(false)
  const handleHoverItem = useCallback(() => {
    SetIsHovered((prevState) => !prevState)
  }, [])

  return (
    <Link to={to}>
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
          <Text>{title}</Text>
        </Flex>
      </Box>
    </Link>
  )
}, isEqual)

export default SidebarItem
