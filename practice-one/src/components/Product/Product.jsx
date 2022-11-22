import PropTypes from 'prop-types'
import Button from '../Button/Button'
import './product.css'
import Image from '../Image/Image'
import HeadingText from '../HeadingText/HeadingText'
import Text from '../Text/Text'

const Product = ({ product }) => {
  const { imageURL, title, content, price } = product

  return (
    <div className="card">
      <Image src={imageURL} alt="product-image" />
      <HeadingText content={title} style="black" />
      <Text leading="relaxed">{content}</Text>
      <div className="flex">
        <Text color="yellow-700" weight="semibold" size="2xl" leading="extra-loose">
          ${price}
        </Text>
        <Button style="dark" size="small" title="buy now" />
      </div>
    </div>
  )
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
}

export default Product
