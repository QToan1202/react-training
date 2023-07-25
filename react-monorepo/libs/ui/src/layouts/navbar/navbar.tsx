import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { AspectRatio, Box, Flex, HStack, IconButton, Image } from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'

import { CustomButton } from '../../components'
import logo from '../../../assets/images/library-logo.webp'

export interface NavbarProps {
  children: React.ReactNode
}

const Navbar = memo(({ children }: NavbarProps) => {
  return (
    <Box mx="auto" p={5} maxW={1200}>
      <Flex alignItems="center" justifyContent="space-between">
        <Link to="/">
          <AspectRatio ratio={2.8 / 1} minW="140px">
            <Image objectFit="cover" src={logo} alt="logo of library website" />
          </AspectRatio>
        </Link>
        <HStack spacing={5} display={{ base: 'none', md: 'flex' }}>
          {children}
          <Link to="/login">
            <CustomButton title="login" />
          </Link>
          <Link to="/register">
            <CustomButton title="get started" />
          </Link>
        </HStack>
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          aria-label="open menu"
          bg="transparent"
          icon={<FiMenu size={24} />}
        />
      </Flex>
    </Box>
  )
})

export default Navbar
