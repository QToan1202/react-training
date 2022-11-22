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
        name: 'any',
        required: true,
      },
      defaultValue: 'My link',
      table: {
        defaultValue: {
          summary: 'My link',
        },
      },
      control: {
        type: 'text',
      },
      description: 'The content represent the link',
    },
  },
}

const Template = (args) => <Link {...args} />

export const Default = Template.bind({})
Default.args = {}
