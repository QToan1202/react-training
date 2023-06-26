import { memo } from 'react'
import RadiusButton from './Button.styles'
import { IButtonProps } from '@types'

const Button = ({ title, size, variant, type, onClick, customStyle }: IButtonProps) => (
  <RadiusButton className={customStyle} type={type} size={size} variant={variant} onClick={onClick}>
    {title}
  </RadiusButton>
)

Button.defaultProps = {
  type: 'button',
  size: 'sm',
  variant: 'primary',
  customStyle: '',
}

export default memo(Button)
