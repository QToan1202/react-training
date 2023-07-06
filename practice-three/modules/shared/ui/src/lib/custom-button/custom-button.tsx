import { Button, ButtonProps } from '@chakra-ui/react'
import { COLORS } from '@practice-three/modules/shared/utils'

export interface CustomButtonProps extends ButtonProps {
  title: string
  variant?: string
}

export function CustomButton({ title }: CustomButtonProps) {
  return (
    <Button
      p="10px 30px"
      bgColor={COLORS.BLACK}
      borderWidth="3px"
      borderRadius="3xl"
      borderColor={COLORS.BLACK}
      color={COLORS.WHITE}
      fontWeight="bold"
      fontSize="20px"
      textTransform="capitalize"
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
