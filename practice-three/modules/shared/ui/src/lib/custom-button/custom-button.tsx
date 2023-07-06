import { Button } from '@chakra-ui/react'
import { COLORS } from '@practice-three/modules/shared/utils'

export interface CustomButtonProps {
  title: string
  variant?: string
}

export function CustomButton({ title }: CustomButtonProps) {
  return (
    <Button
      bgColor={COLORS.BLACK}
      colorScheme={COLORS.WHITE}
      borderWidth="3px"
      borderRadius="3xl"
      borderColor={COLORS.BLACK}
      color={COLORS.WHITE}
      fontWeight="bold"
      fontSize="20px"
      textTransform="capitalize"
      p="10px 30px"
      _hover={{
        bgColor: 'transparent',
        color: COLORS.BLACK,
        textDecoration: 'underline',
      }}
    >
      {title}
    </Button>
  )
}

export default CustomButton
