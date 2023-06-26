import { memo } from 'react'
import styles from './Content.module.css'
import { IContentProps } from '@types'

const Content = ({ title, description }: IContentProps) => (
  <div className={styles.container}>
    <div className={styles.title_wrapper}>
      <h2 className={styles.title}>{title}</h2>
    </div>
    {description && <p className={styles.desc}>{description}</p>}
  </div>
)

export default memo(Content)
