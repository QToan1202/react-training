import PropTypes from 'prop-types'
import styles from './Select.module.css'

const Select = ({ defaultValue, children, onSelect, value }) => (
  <select value={value} className={styles.dropdown} defaultValue={defaultValue} onChange={onSelect}>
    {children}
  </select>
)

Select.propTypes = {
  value: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  onSelect: PropTypes.func.isRequired,
}

export default Select
