import { memo } from 'react'
import { AbsoluteCenter, Box, Spinner } from '@chakra-ui/react'

import { COLORS } from '@react-monorepo/shared/utils'

export const Loading = memo(() => {
  return (
    <Box position="relative" h="100vh">
      <AbsoluteCenter axis="both">
        <Spinner thickness="4px" speed="0.65s" color={COLORS.PRIMARY} size="xl" />
      </AbsoluteCenter>
    </Box>
  )
})