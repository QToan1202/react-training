import { ComponentMeta, ComponentStory } from '@storybook/react'
import image from '../../assets/images/product.png'
import { Product } from '../index'

export default {
  title: 'Product Card',
  component: Product,
} as ComponentMeta<typeof Product>

const Template: ComponentStory<typeof Product> = (args) => <Product {...args} />

const data = {
  image,
  title: 'Beats',
  description: `Up to 8 hours of battery life \n
  With Fast Fuel, a 5-minute charge = 2 hours of playback`,
  price: 299.95,
}

export const Default = Template.bind({})
Default.args = { product: data }
