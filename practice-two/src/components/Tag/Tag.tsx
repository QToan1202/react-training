import { memo } from 'react'
import styles from './Tag.module.css'
import { ITagProps } from '@types'

const Tag = ({ title, onClick }: ITagProps) => {
  return (
    <div className={styles.tag}>
      <div className={styles.tag__content}>
        <p>{title}</p>
      </div>
      <button className={styles.tag__btn} onClick={onClick}>
        &#10006;
      </button>
    </div>
  )
}

export default memo(Tag)
