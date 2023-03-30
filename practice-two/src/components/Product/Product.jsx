import { memo } from 'react'
import PropTypes from 'prop-types'
import { Button, Content, Image } from '../index'
import placeHolder from '@assets/images/placeholder.jpg'
import styles from './Product.module.css'

const Product = ({ cover, title, description, onDeleteProduct }) => (
  <div className={styles.product}>
    <div className={styles.product__img}>
      <Image src={cover} />
    </div>
    <div className={styles.product__desc}>
      <Content title={title} description={description} />
    </div>
    <div className={styles.product__footer}>
      <Button title="Delete" variant="tertiary" onClick={onDeleteProduct} />
      <Button title="Edit" variant="secondary" />
    </div>
  </div>
)

Product.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  onDeleteProduct: PropTypes.func,
}

Product.defaultProps = {
  cover: placeHolder,
  title: '',
  description: '',
  onDeleteProduct: () => undefined,
}

export default memo(Product)
