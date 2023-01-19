import { Product } from '../index'

export default {
  title: 'Product',
  component: Product,
}

const Template = (args) => <Product.Container {...args} />

export const Default = Template.bind({})
Default.args = {
  children: (
    <>
      <Product.Content title="My product">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus rem facere perspiciatis error repellat
          laborum tempora? Mollitia, nisi doloribus!
        </p>
      </Product.Content>
      <Product.Footer>
        <p>Hello</p>
      </Product.Footer>
    </>
  ),
}
