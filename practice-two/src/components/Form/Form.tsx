import { memo } from 'react'
import styles from './Form.module.css'
import { IFormProps } from '@types'

const Form = ({ action, method, onSubmit, children }: IFormProps) => (
  <form className={styles.form} action={action} method={method} onSubmit={onSubmit}>
    {children}
  </form>
)

Form.defaultProps = {
  action: '#',
  method: 'get',
}

export default memo(Form)
