import PropTypes from 'prop-types'
import styles from './Dropdown.module.css'

const Select = ({ defaultValue, children }) => (
  <select className={styles.dropdown} defaultValue={defaultValue}>
    {children}
  </select>
)

const Option = ({ value, label, disabled, hidden }) => (
  <option className={styles.option} value={value} disabled={disabled} hidden={hidden}>
    {label}
  </option>
)

Option.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
}

Option.defaultProps = {
  value: 'test',
  label: 'Testing value',
  disabled: false,
  hidden: false,
}

Select.propTypes = {
  defaultValue: PropTypes.string,
  children: PropTypes.element,
}

Select.defaultProps = {
  placeHolder: 'Choose a value',
  children: <Option />,
}

const Dropdown = {
  Select,
  Option,
}

export default Dropdown
