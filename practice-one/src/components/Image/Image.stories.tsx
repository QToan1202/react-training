import logo from '../../assets/images/logo.svg'
import { Image } from '../index'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Image',
  component: Image,
  argTypes: {
    src: {
      type: {
        name: 'string',
        required: true,
      },
      defaultValue: logo,
      table: {
        defaultValue: {
          summary: logo,
        },
      },
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof Image>

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />

export const Default = Template.bind({})
Default.args = {}
