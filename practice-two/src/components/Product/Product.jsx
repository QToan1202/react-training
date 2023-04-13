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
        <Image src={cover} alt="my image" />
      </div>
      {description && (
        <div className={styles.product__desc}>
          <Content title={title} description={description} />
        </div>
      )}
      <div className={styles.product__footer}>
        <Button title="Delete" variant="secondary" onClick={handleDeleteAction} />
        <Button title="Edit" onClick={handleEditAction} />
      </div>
    </div>
  )
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number,
  cover: PropTypes.string,
  description: PropTypes.string,
  onDeleteProduct: PropTypes.func.isRequired,
  onEditProduct: PropTypes.func.isRequired,
}

Product.defaultProps = {
  cover: placeHolder,
  description: '',
}

export default memo(Product)
