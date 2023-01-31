import PropTypes from 'prop-types'
import styles from './Form.module.css'

const Form = ({ action, method, onSubmit, children }) => (
  <form className={styles.form} action={action} method={method} onSubmit={onSubmit}>
    {children}
  </form>
)

Form.propTypes = {
  action: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
}

Form.defaultProps = {
  action: '#',
  method: 'get',
  onSubmit: () => undefined,
}

export default Form
