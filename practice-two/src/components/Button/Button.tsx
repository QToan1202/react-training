import { memo } from 'react'
import RadiusButton from './Button.styles'
import { IButtonProps } from '@types'

const Button = ({ title, size = "sm", variant = "primary", type = 'button', onClick, customStyle }: IButtonProps) => (
  <RadiusButton className={customStyle} type={type} size={size} variant={variant} onClick={onClick}>
    {title}
  </RadiusButton>
)

export default memo(Button)
