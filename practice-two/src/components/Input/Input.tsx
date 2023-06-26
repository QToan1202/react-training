import { memo, useId } from 'react'
import { CInput, CLabel, Wrapper } from './Input.styles'
import { IInputProps } from '@types'

const Input = ({ type, placeholder, autocomplete, label, config, register }: IInputProps) => {
  const id = useId()

  return (
    <Wrapper hasLabel={!!label}>
      {label ? <CLabel htmlFor={id}>{label.toString()}</CLabel> : null}
      <CInput id={id} type={type} placeholder={placeholder} autoComplete={autocomplete} {...register(label, config)} />
    </Wrapper>
  )
}

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  autoComplete: 'off',
}

export default memo(Input)
