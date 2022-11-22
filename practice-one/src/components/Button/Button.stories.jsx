import { Button } from '../index'

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
    type: {
      defaultValue: 'primary',
      description: 'Change color of the button',
    },
  },
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  type: 'primary',
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'medium',
  type: 'primary',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  type: 'secondary',
}
