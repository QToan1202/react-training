import './form.css'
import { IFormProps } from '../../types/interfaces'

const Form = ({ action, method, children }:  IFormProps) => (
  <form action={action} method={method} className="form">
    {children}
  </form>
)

export default Form
