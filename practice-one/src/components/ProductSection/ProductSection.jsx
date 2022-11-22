import PropTypes from 'prop-types'
import './productSection.css'
import { Button, Text, Image, HeadingText } from '../index'

const ProductSection = ({ product }) => {
  const { productImg, title, upperTitle, price, description } = product

  return (
    <div className="container">
      <div className="product_image">
        <Image src={productImg} alt="photo for the header section" />
      </div>
      <div className="content">
        <Text color="white" weight="medium" leading="relaxed">
          {upperTitle}
        </Text>
        <HeadingText content={title} />
        <div className="inline">
          <Text color="white" leading="relaxed" size="5xl">
            &#36;{price}
          </Text>
          <Button size="medium" style="warning" title="buy now" />
        </div>
        <Text color="yellow-400" weight="medium" leading="relaxed">
          {description}
        </Text>
      </div>
    </div>
  )
}

ProductSection.propTypes = {
  product: PropTypes.object.isRequired,
}

export default ProductSection
