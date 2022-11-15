import PropTypes from 'prop-types'
import './input.css'

export default function Input({type = 'text' , placeholder, autocomplete = 'on'}) {
  return <input className='input' type={type} placeholder={placeholder} autoComplete={autocomplete} />
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  autocomplete: PropTypes.string,
}