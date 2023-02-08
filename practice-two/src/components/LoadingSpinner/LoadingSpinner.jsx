import { memo } from 'react'
import styles from './LoadingSpinner.module.css'

const LoadingSpinner = () => (
  <div className={styles.spinner}>
    <div className={styles.spinner__loading}></div>
  </div>
)

export default memo(LoadingSpinner)
