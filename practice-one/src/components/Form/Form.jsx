import PropTypes from 'prop-types'
import './form.css'

const Form = ({ action, method, children }) => (
  <form action={action} method={method} className="form">
    {children}
  </form>
)

Form.propTypes = {
  action: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
}

export default Form
