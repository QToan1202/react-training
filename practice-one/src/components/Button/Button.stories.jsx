import Button from './Button';

export default {
  title: 'Example/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  style: 'dark',
};


export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  style: 'dark',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  style: 'warning',
};
