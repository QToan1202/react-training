import { memo } from 'react'
import { IOptionProps } from '@types'

const Option = ({ value, label, disabled, hidden }: IOptionProps) => (
  <option value={value} disabled={disabled} hidden={hidden}>
    {label}
  </option>
)

export default memo(Option)
