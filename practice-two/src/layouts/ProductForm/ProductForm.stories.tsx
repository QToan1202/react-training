import { ComponentMeta, ComponentStory } from '@storybook/react'
import ProductForm from './ProductForm'

export default {
  title: 'Add product page',
  component: ProductForm,
} as ComponentMeta<typeof ProductForm>

const Template: ComponentStory<typeof ProductForm> = (args) => <ProductForm {...args} />

export const Default = Template.bind({})
Default.args = {}
