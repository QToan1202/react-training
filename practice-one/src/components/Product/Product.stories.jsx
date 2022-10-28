import Product from './Product';

export default {
  title: 'Product Card',
  component: Product,
};

const Template = (args) => <Product {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Beats',
  content: `Up to 8 hours of battery life
  With Fast Fuel, a 5-minute charge = 2 hours of playback`,
  price: 299.95
}
