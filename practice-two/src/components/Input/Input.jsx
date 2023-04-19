import { memo, useId } from 'react'
import PropTypes from 'prop-types'
import { CInput, CLabel, Wrapper } from './Input.styles'

const Input = ({ type, placeholder, autoComplete, label, register, config }) => {
  const id = useId()

  return (
    <Wrapper hasLabel={!!label}>
      {label ? <CLabel htmlFor={id}>{label}</CLabel> : null}
      <CInput id={id} type={type} placeholder={placeholder} autoComplete={autoComplete} {...register(label, config)} />
    </Wrapper>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  register: PropTypes.func,
  config: PropTypes.object,
}

Input.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  autoComplete: 'off',
  register: () => undefined,
}

export default memo(Input)
