import HeadingText from './HeadingText';

export default {
  title: 'Heading Text',
  component: HeadingText,
};

const Template = (args) => <HeadingText {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: 'Lorem'
};
