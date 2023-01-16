import PropTypes from 'prop-types'
import styled from 'styled-components'

const handleButtonWidth = (size) => {
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

const RadiusButton = styled.button`
  border: 1px solid var(--gray);
  border-radius: 40px;
  padding: ${({ size }) => handleButtonWidth(size)};
  cursor: pointer;
  background-color: ${({ variant }) => (variant === 'primary' ? 'transparent' : 'var(--blue)')};
  color: ${({ variant }) => variant === 'secondary' && 'white'};
  font-weight: 700;
`

const Button = ({ title, size, variant, onClick }) => (
  <RadiusButton size={size} variant={variant} onClick={onClick}>
    {title}
  </RadiusButton>
)

Button.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  variant: PropTypes.oneOf(['primary', 'secondary']),
  onClick: PropTypes.func,
}

Button.defaultProps = {
  title: 'Button',
  size: 'sm',
  variant: 'primary',
  onClick: () => console.log('Click'),
}

export default Button
