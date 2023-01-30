import PropTypes from 'prop-types'
import Image from '../Image/Image'
import styles from './Product.module.css'

const Container = ({ children, onClick }) => (
  <div className={styles.product} onClick={onClick}>
    {children}
  </div>
)

const Meta = ({ cover, ...rest }) => (
  <div className={styles.product__img}>
    <Image src={cover} {...rest} />
  </div>
)

const Content = ({ children, title }) => (
  <div className={styles.product__desc}>
    <h2 className={styles.product__title}>{title}</h2>
    {children}
  </div>
)

const Footer = ({ children }) => <div className={styles.product__footer}>{children}</div>

Container.propTypes = {
  children: PropTypes.element,
  onClick: PropTypes.func,
}

Meta.propTypes = {
  cover: PropTypes.string,
}

Content.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.string,
  children: PropTypes.element,
}

Footer.propTypes = {
  children: PropTypes.element,
}

Container.defaultProps = {
  children: null,
  onClick: () => void 0,
}

Meta.defaultProps = {
  cover: 'https://cdn.pixabay.com/photo/2022/11/14/20/14/compass-7592447_960_720.jpg',
}

Content.defaultProps = {
  title: '',
  children: null,
}

Footer.defaultProps = {
  children: null,
}

const Product = {
  Container,
  Meta,
  Content,
  Footer,
}

export default Product
