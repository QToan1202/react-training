import PropTypes from 'prop-types'
import './input.css'

const Input = ({ type = 'text', placeholder, autoComplete = 'on' }) => (
  <input className="input" type={type} placeholder={placeholder} autoComplete={autoComplete} />
)

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
}

export default Input
