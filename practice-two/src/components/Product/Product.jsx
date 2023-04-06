import { memo, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Button, Content, Image } from '../index'
import placeHolder from '@assets/images/placeholder.jpg'
import styles from './Product.module.css'

const Product = ({ id, cover, title, description, onDeleteProduct, onEditProduct }) => {
  const handleDeleteAction = useCallback(() => onDeleteProduct(id), [id, onDeleteProduct])
  const handleEditAction = useCallback(() => onEditProduct(id), [id, onEditProduct])

  return (
    <div className={styles.product}>
      <div className={styles.product__img}>
        <Image src={cover} />
      </div>
      <div className={styles.product__desc}>
        <Content title={title} description={description} />
      </div>
      <div className={styles.product__footer}>
        <Button title="Delete" variant="secondary" onClick={handleDeleteAction} />
        <Button title="Edit" onClick={handleEditAction} />
      </div>
    </div>
  )
}

Product.propTypes = {
  id: PropTypes.number,
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  onDeleteProduct: PropTypes.func,
  onEditProduct: PropTypes.func,
}

Product.defaultProps = {
  cover: placeHolder,
  title: '',
  description: '',
  onDeleteProduct: () => undefined,
  onEditProduct: () => undefined,
}

export default memo(Product)
