import { memo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { AddProduct } from '@layouts'
import { Button } from '@components'
import styles from './EditProduct.module.css'

const Modal = styled.div`
  display: ${({ isShow }) => (isShow === true ? 'block' : 'none')};
`

const EditProduct = ({ productData, isShow, onCancel, onConfirm }) => {
  return (
    <Modal isShow={isShow}>
      <div className={styles.overlay} />
      <div className={styles.modal}>
        <div className={styles.content}>
          <p className={styles.title}>Edit product</p>
          <AddProduct defaultValues={productData} />
          <Button title="Cancel" onClick={onCancel} />
          <Button title="Confirm" variant="secondary" onClick={onConfirm} />
        </div>
      </div>
    </Modal>
  )
}

EditProduct.propTypes = {
  productData: PropTypes.object.isRequired,
  isShow: PropTypes.bool,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
}

EditProduct.defaultProps = {
  isShow: false,
  onCancel: () => undefined,
  onConfirm: () => undefined,
}

export default memo(EditProduct)
