import PropTypes from 'prop-types'
import Button from '../Button/Button'
import './product.css'
import Image from '../Image/Image'
import HeadingText from '../HeadingText/HeadingText'
import Text from '../Text/Text'

const Product = ({ imageURL, title, content, price }) => (
  <div className="card">
    <Image src={imageURL} alt="product-image" />
    <HeadingText content={title} style="black" />
    <Text leading="relaxed">{content}</Text>
    <span className="flex">
      <Text color="yellow-700" weight="semibold" size="2xl" leading="extra-loose">
        ${price}
      </Text>
      <Button style="dark" size="small" title="buy now" />
    </span>
  </div>
)

Product.propTypes = {
  imageURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default Product
