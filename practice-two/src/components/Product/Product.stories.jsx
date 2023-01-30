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
      <Product.Meta />
      <Product.Content title="My product">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam explicabo laborum saepe blanditiis soluta
          ducimus iusto similique molestiae odit, expedita quam voluptatibus laudantium fuga placeat quas nemo, quaerat
          eaque non ullam nostrum eos esse officiis dicta adipisci! Alias saepe quaerat, reprehenderit mollitia maxime
          consequatur expedita totam facere at officiis obcaecati?
        </p>
      </Product.Content>
      <Product.Footer>
        <p>Hello</p>
      </Product.Footer>
    </>
  ),
}
