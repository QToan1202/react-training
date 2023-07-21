import { memo, useCallback } from 'react'
import { Button, Content, Image } from '../index'
import placeHolder from '@assets/images/placeholder.jpg'
import styles from './Product.module.css'
import { IProductProps } from '@types'

const Product = ({ id, cover = placeHolder, title, description, onDeleteProduct, onEditProduct }: IProductProps) => {
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

export default memo(Product)
