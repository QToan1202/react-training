import image from '../../assets/images/product.png'
import { Product } from '../index'

export default {
  title: 'Product Card',
  component: Product,
}

const Template = (args) => <Product {...args} />

const data = {
  imageURL: image,
  title: 'Beats',
  content: `Up to 8 hours of battery life \n
  With Fast Fuel, a 5-minute charge = 2 hours of playback`,
  price: 299.95,
}

export const Default = Template.bind({})
Default.args = { product: data }
