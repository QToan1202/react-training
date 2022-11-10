import Price from './Price';

export default {
  title: 'Price',
  component: Price,
};

const Template = (args) => <Price {...args} />;

export const Default = Template.bind({});
Default.args = {
  amount: 22.9
};
