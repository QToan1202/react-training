import { AddProduct } from '../../pages/index'

export default {
  title: 'Add product page',
  component: AddProduct,
}

const Template = (args) => <AddProduct {...args} />

export const Default = Template.bind({})
Default.args = {}
