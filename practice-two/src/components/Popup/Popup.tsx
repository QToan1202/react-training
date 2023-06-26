import { memo } from 'react'
import { Button } from '@components'
import styles from './Popup.module.css'
import { IPopupProps } from '@types'

const Popup = ({ title, isShow, onCancel, onConfirm }: IPopupProps) => {
  return (
    <div className={isShow ? styles.block : styles.none} >
      <div className={styles.overlay} />
      <div className={styles.modal}>
        <div className={styles.content}>
          <p className={styles.title}>{title}</p>
          <div className={styles.spacing_top}>
            <Button title="Cancel" onClick={onCancel} />
            <Button title="Confirm" variant="secondary" onClick={onConfirm} />
          </div>
        </div>
      </div>
    </div>
  )
}

Popup.defaultProps = {
  isShow: false,
}

export default memo(Popup)
