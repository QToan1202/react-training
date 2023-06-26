import './form.css'
import { IFormProps } from '@types'

const Form = ({ action, method, children }:  IFormProps) => (
  <form action={action} method={method} className="form">
    {children}
  </form>
)

export default Form
