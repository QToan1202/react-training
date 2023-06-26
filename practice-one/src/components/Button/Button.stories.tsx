import Button from './Button'
import { ComponentMeta, ComponentStory } from '@storybook/react'

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
    variant: {
      defaultValue: 'primary',
      description: 'Change color of the button',
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  variant: 'primary',
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'medium',
  variant: 'primary',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  variant: 'secondary',
}
