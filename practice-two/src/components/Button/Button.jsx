import { memo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const changeBtnSpacing = (size) => {
  switch (size) {
    case 'sm':
      return '8px 34px'

    case 'md':
      return '8px 44px'

    case 'lg':
      return '8px 54px'

    default:
      return '4px 28px'
  }
}

const changeBtnFontSize = (size) => {
  switch (size) {
    case 'sm':
      return '16px'

    case 'md':
      return '18px'

    case 'lg':
      return '20px'

    default:
      return '16px'
  }
}

const changeBtnTheme = (theme) => {
  switch (theme) {
    case 'primary':
      return 'transparent'

    case 'secondary':
      return 'var(--blue)'

    case 'tertiary':
      return 'var(--red)'

    default:
      return 'transparent'
  }
}

const RadiusButton = styled.button`
  margin-right: 10px;
  border: 1px solid var(--gray);
  border-radius: 40px;
  padding: ${({ size }) => changeBtnSpacing(size)};
  cursor: pointer;
  background-color: ${({ variant }) => changeBtnTheme(variant)};
  color: ${({ variant }) => variant !== 'primary' && 'white'};
  font-weight: 500;
  font-size: ${({ size }) => changeBtnFontSize(size)};
`

const Button = ({ title, size, variant, type, onClick, customStyle }) => (
  <RadiusButton className={customStyle} type={type} size={size} variant={variant} onClick={onClick}>
    {title}
  </RadiusButton>
)

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  title: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  onClick: PropTypes.func,
  customStyle: PropTypes.string,
}

Button.defaultProps = {
  type: 'button',
  title: 'Button',
  size: 'sm',
  variant: 'primary',
  onClick: () => undefined,
  customStyle: '',
}

export default memo(Button)
