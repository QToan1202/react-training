import PropTypes from 'prop-types'
import './button.css'

const Button = ({ title, size, style, onClick }) => (
  <button className={['btn', `btn--${size}`, `btn--${style}`].join(' ')} onClick={onClick}>
    {title}
  </button>
)

Button.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  style: PropTypes.oneOf(['dark', 'warning']),
  onClick: PropTypes.func,
}

export default Button
