import Header from './Header';

export default {
  title: 'Header Nav',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});