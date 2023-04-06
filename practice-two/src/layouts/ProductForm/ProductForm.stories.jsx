import ProductForm from './ProductForm'

export default {
  title: 'Add product page',
  component: ProductForm,
}

const Template = (args) => <ProductForm {...args} />

export const Default = Template.bind({})
Default.args = {}
