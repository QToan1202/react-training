import { Box, Button, Flex, HStack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { CustomButton } from '../../components'
import { COLORS } from '@practice-three/modules/shared/utils'

export function Navbar() {
  return (
    <Box mx="auto" py={5} maxW={1200}>
      <Flex alignItems="center" justifyContent="space-between">
        <Text>Logo</Text>
        <HStack spacing={5}>
          <Button as={Link} to="#" variant="ghost" px={8} _hover={{ textDecor: 'underline', bgColor: COLORS.GRAY_100 }}>
            Pricing
          </Button>
          <Button as={Link} to="#" variant="ghost" px={8} _hover={{ textDecor: 'underline', bgColor: COLORS.GRAY_100 }}>
            Support
          </Button>
          <Button as={Link} to="#" variant="ghost" px={8} _hover={{ textDecor: 'underline', bgColor: COLORS.GRAY_100 }}>
            Contact Us
          </Button>
          <CustomButton title="Login" />
          <CustomButton title="get started" />
        </HStack>
      </Flex>
    </Box>
  )
}

export default Navbar
