import {Button} from '../index'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    title: {
      type: {
        name: 'string',
        required: true,
      },
      defaultValue: 'buy now',
      control: {
        type: 'text',
      },
      description: 'The content in the button',
    },
    size: {
      defaultValue: 'small',
      description: 'Change size of the button',
    },
    style: {
      defaultValue: 'dark',
      description: 'Change color of the button',
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {};

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
