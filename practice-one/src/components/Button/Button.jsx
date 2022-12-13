import PropTypes from 'prop-types'
import './button.css'

const Button = ({ title, size, type, onClick }) => (
  <button className={['btn', `btn--${size}`, `btn--${type}`].join(' ')} onClick={onClick}>
    {title}
  </button>
)

Button.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['primary', 'secondary']),
  onClick: PropTypes.func,
}

export default Button
