import { memo } from 'react'
import PropTypes from 'prop-types'
import styles from './FormItem.module.css'

const FormItem = ({ children }) => <div className={styles.item}>{children}</div>

FormItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
}

export default memo(FormItem)
