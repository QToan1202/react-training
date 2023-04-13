import { memo } from 'react'
import PropTypes from 'prop-types'
import styles from './Form.module.css'

const Form = ({ action, method, onSubmit, children }) => (
  <form className={styles.form} action={action} method={method} onSubmit={onSubmit}>
    {children}
  </form>
)

Form.propTypes = {
  action: PropTypes.string,
  method: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired,
}

Form.defaultProps = {
  action: '#',
  method: 'get',
}

export default memo(Form)
