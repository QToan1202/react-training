import PropTypes from 'prop-types'
import styles from './Select.module.css'

const Select = ({ defaultValue, children, onSelect }) => (
  <select className={styles.dropdown} defaultValue={defaultValue} onSelect={onSelect}>
    {children}
  </select>
)

Select.propTypes = {
  defaultValue: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  onSelect: PropTypes.func.isRequired,
}

Select.defaultProps = {
  placeHolder: 'Choose a value',
  onSelect: () => void 0,
}

export default Select
