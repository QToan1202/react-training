import PropTypes from 'prop-types'
import Image from '../Image/Image'
import styles from './Product.module.css'

const Container = ({ children, onClick }) => (
  <div className={styles.product} onClick={onClick}>
    {children}
  </div>
)

const Content = ({ children, cover, title }) => (
  <>
    {cover && (
      <div className={styles.product__img}>
        <Image src={cover} />
      </div>
    )}
    <div className={styles.product__desc}>
      <h2 className={styles.product__title}>{title}</h2>
      {children}
    </div>
  </>
)

const Footer = ({ children }) => <div className={styles.product__footer}>{children}</div>

Container.propTypes = {
  children: PropTypes.element,
  onClick: PropTypes.func,
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

Content.defaultProps = {
  title: '',
  cover: 'https://cdn.pixabay.com/photo/2022/11/14/20/14/compass-7592447_960_720.jpg',
  children: null,
}

Footer.defaultProps = {
  children: null,
}

const Product = {
  Container,
  Content,
  Footer,
}

export default Product
