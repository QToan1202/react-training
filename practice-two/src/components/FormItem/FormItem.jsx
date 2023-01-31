import PropTypes from 'prop-types'
import styles from './FormItem.module.css'

const FormItem = ({ children }) => <div className={styles.item}>{children}</div>

FormItem.propTypes = {
  children: PropTypes.element.isRequired,
}

export default FormItem
