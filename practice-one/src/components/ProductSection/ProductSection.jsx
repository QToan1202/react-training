import PropTypes from 'prop-types'
import './productSection.css'
import Button from '../Button/Button'
import Text from '../Text/Text'
import Image from '../Image/Image'
import HeadingText from '../HeadingText/HeadingText'

const ProductSection = ({ productImg, title, upperTitle, price, description }) => (
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

ProductSection.propTypes = {
  productImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  upperTitle: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
}

export default ProductSection
