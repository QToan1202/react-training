import { memo } from 'react'
import PropTypes from 'prop-types'
import { Content, Image } from '../index'
import styles from './Product.module.css'
import placeHolder from '@assets/images/placeholder.jpg'

const Product = ({ children, cover, title, description }) => (
  <div className={styles.product}>
    <div className={styles.product__img}>
      <Image src={cover} />
    </div>
    <div className={styles.product__desc}>
      <Content title={title} description={description} />
    </div>
    <div className={styles.product__footer}>{children}</div> {/*TODO: Replace with edit/delete action*/}
  </div>
)

Product.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
}

Product.defaultProps = {
  cover: placeHolder,
  title: '',
  description: '',
  children: null,
}

export default memo(Product)
