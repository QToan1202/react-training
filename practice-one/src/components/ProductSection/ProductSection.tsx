import './productSection.css'
import { Button, Text, Image, HeadingText } from '../index'
import { IProductProps } from '../../types/interfaces'

const ProductSection = ({ product }: IProductProps) => {
  const { image, title, upperTitle, price, description } = product

  return (
    <div className="container">
      <div className="product_image">
        <Image src={image} alt="photo for the header section" />
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
          <Button size="medium" variant="secondary" title="buy now" />
        </div>
        <Text color="yellow-400" weight="medium">
          {description}
        </Text>
      </div>
    </div>
  )
}

export default ProductSection
