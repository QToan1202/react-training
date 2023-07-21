import './button.css'
import { IButtonProps } from '@types'

const Button = ({ title, size = 'small', variant = 'primary', onClick }: IButtonProps) => (
  <button className={['btn', `btn--${size}`, `btn--${variant}`].join(' ')} onClick={onClick}>
    {title}
  </button>
)

export default Button
