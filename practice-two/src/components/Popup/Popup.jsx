import { memo } from 'react'
import PropTypes from 'prop-types'
import { Button } from '@components'
import styles from './Popup.module.css'
import styled from 'styled-components'

const Modal = styled.div`
  display: ${({ isShow }) => (isShow === true ? 'block' : 'none')};
`

const Popup = ({ isShow, onCancel, onConfirm }) => {
  return (
    <Modal isShow={isShow}>
      <div className={styles.overlay} />
      <div className={styles.modal}>
        <div className={styles.content}>
          <p className={styles.title}>Are you sure wanna delete this product?</p>
          <div className={styles.spacing_top}>
            <Button title="Cancel" onClick={onCancel} />
            <Button title="Confirm" variant="secondary" onClick={onConfirm} />
          </div>
        </div>
      </div>
    </Modal>
  )
}

Popup.propTypes = {
  isShow: PropTypes.bool,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
}

Popup.defaultProps = {
  isShow: false,
  onCancel: () => undefined,
  onConfirm: () => undefined,
}

export default memo(Popup)
