import './input.css'
import { IInputProps } from '../../types/interfaces'

const Input = ({ type = 'text', placeholder, autoComplete = 'on' }: IInputProps) => (
  <input className="input" type={type} placeholder={placeholder} autoComplete={autoComplete} />
)

export default Input
