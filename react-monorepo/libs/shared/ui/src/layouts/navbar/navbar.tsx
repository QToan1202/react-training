import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { Box, Flex, HStack, Text } from '@chakra-ui/react'

import { CustomButton } from '../../components'

export interface NavbarProps {
  children: React.ReactNode
}

export const Navbar = memo(({ children }: NavbarProps) => {
  return (
    <Box mx="auto" py={5} maxW={1200}>
      <Flex alignItems="center" justifyContent="space-between">
        <Text>Logo</Text>
        <HStack spacing={5}>
          {children}
          <Link to="/login">
            <CustomButton title="login" />
          </Link>
          <Link to="/register">
            <CustomButton title="get started" />
          </Link>
        </HStack>
      </Flex>
    </Box>
  )
})
