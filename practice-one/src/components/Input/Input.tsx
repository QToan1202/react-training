import './input.css'
import { IInputProps } from '@types'

const Input = ({ type = 'text', placeholder, autoComplete = 'on' }: IInputProps) => (
  <input className="input" type={type} placeholder={placeholder} autoComplete={autoComplete} />
)

export default Input
