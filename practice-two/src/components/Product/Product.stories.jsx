import { Product } from '../index'

export default {
  title: 'Product',
  component: Product,
}

const Template = (args) => <Product {...args} />

export const Default = Template.bind({})
Default.args = {}

export const ProductExample = Template.bind({})
ProductExample.args = {
  title: 'Product 1',
  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, adipisci.',
  children: 'Footer',
}
