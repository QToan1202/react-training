import { forwardRef, memo, useId } from 'react'
import { CInput, CLabel, Wrapper } from './Input.styles'
import { IInputProps } from '@types'

const Input = forwardRef<HTMLInputElement, IInputProps>(({ type = "text", placeholder = "", autoComplete = "off", label }, ref) => {
  const id = useId()

  return (
    <Wrapper hasLabel={!!label}>
      {label ? <CLabel htmlFor={id}>{label.toString()}</CLabel> : null}
      <CInput id={id} type={type} placeholder={placeholder} autoComplete={autoComplete} ref={ref}/>
    </Wrapper>
  )
})

export default memo(Input)
