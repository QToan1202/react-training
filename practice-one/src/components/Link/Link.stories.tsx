import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Link } from '../index'

export default {
  title: 'Link',
  component: Link,
  argTypes: {
    to: {
      type: {
        name: 'string',
        required: true,
      },
      defaultValue: 'javascript:void(0)',
      table: {
        defaultValue: {
          summary: 'javascript:void(0)',
        },
      },
      control: {
        type: 'text',
      },
      description: 'The URL to navigate to',
    },
    children: {
      type: {
        name: 'string',
        required: true,
      },
      defaultValue: 'My link',
      table: {
        defaultValue: {
          summary: 'My link',
        },
      },
      control: {
        type: 'string',
      },
      description: 'The content represent the link',
    },
  },
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />

export const Default = Template.bind({})
Default.args = {}
