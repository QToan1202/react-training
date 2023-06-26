import { memo } from 'react'
import styles from './FormItem.module.css'
import { IFormProps } from '@types'

const FormItem = ({ children }: Pick<IFormProps, 'children'>) => <div className={styles.item}>{children}</div>

export default memo(FormItem)
