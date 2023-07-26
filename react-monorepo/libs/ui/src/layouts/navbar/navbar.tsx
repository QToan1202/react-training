import { Box, Button } from '@chakra-ui/react'
import { Link, Outlet } from 'react-router-dom'

import { COLORS } from '@react-monorepo/utils'
import { Navbar as NavbarLayout } from '../../components'
import backgroundImg from '../../../assets/images/squiggle-pattern-gray.webp'

const navbarLink = ['pricing', 'support', 'contact us']

const Navbar = () => {
  return (
    <Box h="100vh" bgImage={backgroundImg}>
      <NavbarLayout>
        {navbarLink.map((item) => (
          <Button
            key={item}
            as={Link}
            to="#"
            textTransform="capitalize"
            variant="ghost"
            px={8}
            _hover={{ textDecor: 'underline', bgColor: COLORS.GRAY_100 }}
          >
            {item}
          </Button>
        ))}
      </NavbarLayout>
      <Outlet />
    </Box>
  )
}

export default Navbar
