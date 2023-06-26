import { memo } from 'react'
import styles from './LoadingSpinner.module.css'

const LoadingSpinner = () => (
  <div className={styles.overlay}>
    <div className={styles.spinner}>
      <div className={styles.spinner__loading}></div>
    </div>
  </div>
)

export default memo(LoadingSpinner)
