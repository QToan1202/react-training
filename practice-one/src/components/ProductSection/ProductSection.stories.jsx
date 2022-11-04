import ProductSection from './ProductSection';
import headPhone from '../../assets/images/black_headphone.png'

export default {
  title: 'Product Section',
  component: ProductSection,
};

const Template = (args) => <ProductSection {...args} />;

export const Default = Template.bind({});
Default.args = {
  productImg: headPhone,
  title: 'Experience your music like never before.',
  upperTitle: 'Beats Studio3 Wireless',
  price: 299.95,
  description: '$60 Apple Music gift card with purchase of select Beats products.*'
}
