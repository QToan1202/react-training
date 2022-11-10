import Description from './Description';

export default {
  title: 'Description',
  component: Description,
};

const Template = (args) => <Description {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, molestias!'
};
