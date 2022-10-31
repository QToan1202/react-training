import Product from './Product';
import image from '../../assets/images/product.png'

export default {
  title: 'Product Card',
  component: Product,
};

const Template = (args) => <Product {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageURL: image,
  title: 'Beats',
  content: `Up to 8 hours of battery life
  With Fast Fuel, a 5-minute charge = 2 hours of playback`,
  price: 299.95
}
