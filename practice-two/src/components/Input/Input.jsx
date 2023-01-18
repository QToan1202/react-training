import PropTypes from 'prop-types'
import styles from './Input.module.css'

const Input = ({ value, type, placeholder, autoComplete }) => (
  <input className={styles.input} type={type} placeholder={placeholder} autoComplete={autoComplete} value={value} />
)

Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  type: PropTypes.string,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
}

Input.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  autoComplete: 'on',
}

export default Input
