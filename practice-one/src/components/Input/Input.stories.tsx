import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Input } from '../index'

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    type: {
      type: {
        name: 'string',
        required: false,
      },
      defaultValue: 'text',
      table: {
        defaultValue: {
          summary: 'text',
        },
      },
      control: {
        type: 'text',
      },
      description: 'Heading of the form',
    },
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {}
