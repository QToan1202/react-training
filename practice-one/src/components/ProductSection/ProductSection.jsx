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
        <Text color="white" weight="medium">
          {upperTitle}
        </Text>
        <HeadingText content={title} />
        <div className="inline">
          <Text color="white" priceSection>
            &#36;{price}
          </Text>
          <Button size="medium" type="secondary" title="buy now" />
        </div>
        <Text color="yellow-400" weight="medium">
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
