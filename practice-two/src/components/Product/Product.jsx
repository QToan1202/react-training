import PropTypes from 'prop-types'
import { Content, Image } from '../index'
import styles from './Product.module.css'

const Product = ({ children, cover, title, description }) => (
  <div className={styles.product}>
    <div className={styles.product__img}>
      <Image src={cover} />
    </div>
    <div className={styles.product__desc}>
      <Content title={title} description={description} />
    </div>
    <div className={styles.product__footer}>{children}</div>
  </div>
)

Product.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
}

Product.defaultProps = {
  cover: 'https://cdn.pixabay.com/photo/2022/11/14/20/14/compass-7592447_960_720.jpg',
  title: '',
  description: '',
  children: null,
}

export default Product
