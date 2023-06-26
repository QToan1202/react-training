import './product.css'
import { Button, Image, HeadingText, Text } from '../index'
import { IProductProps } from '../../types/interfaces'

const Product = ({ product }: IProductProps) => {
  const { image, title, description, price } = product

  return (
    <div className="card">
      <Image src={image} alt="product-image" />
      <HeadingText content={title} type="primary" />
      <Text leading="relaxed">{description}</Text>
      <div className="flex">
        <Text color="yellow-700" weight="semibold" price>
          ${price}
        </Text>
        <Button variant="primary" size="small" title="buy now" />
      </div>
    </div>
  )
}

export default Product
