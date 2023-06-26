import { ComponentMeta, ComponentStory } from '@storybook/react'
import headPhone from '@assets/images/black_headphone.png'
import { ProductSection } from '../index'

export default {
  title: 'Product Section',
  component: ProductSection,
} as ComponentMeta<typeof ProductSection>

const Template: ComponentStory<typeof ProductSection> = (args) => <ProductSection {...args} />

const product = {
  image: headPhone,
  title: 'Experience your music like never before.',
  upperTitle: 'Beats Studio3 Wireless',
  price: 299.95,
  description: '$60 Apple Music gift card with purchase of select Beats products.*',
}

export const Default = Template.bind({})
Default.args = { product }
