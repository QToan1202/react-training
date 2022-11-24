import PropTypes from 'prop-types'
import './product.css'
import { Button, Image, HeadingText, Text } from '../index'

const Product = ({ product }) => {
  const { imageURL, title, content, price } = product

  return (
    <div className="card">
      <Image src={imageURL} alt="product-image" />
      <HeadingText content={title} type="primary" />
      <Text leading="relaxed">{content}</Text>
      <div className="flex">
        <Text color="yellow-700" weight="semibold" price>
          ${price}
        </Text>
        <Button type="primary" size="small" title="buy now" />
      </div>
    </div>
  )
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
}

export default Product
