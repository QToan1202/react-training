import { ISelectProps } from '@types'
import styles from './Select.module.css'

const Select = ({ defaultValue, children, onSelect, value }: ISelectProps) => (
  <select value={value} className={styles.dropdown} defaultValue={defaultValue} onChange={onSelect}>
    {children}
  </select>
)

export default Select
