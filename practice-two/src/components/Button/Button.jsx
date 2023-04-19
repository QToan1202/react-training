import { memo } from 'react'
import PropTypes from 'prop-types'
import RadiusButton from './Button.styles'

const Button = ({ title, size, variant, type, onClick, customStyle }) => (
  <RadiusButton className={customStyle} type={type} size={size} variant={variant} onClick={onClick}>
    {title}
  </RadiusButton>
)

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  customStyle: PropTypes.string,
}

Button.defaultProps = {
  type: 'button',
  size: 'sm',
  variant: 'primary',
  customStyle: '',
}

export default memo(Button)
