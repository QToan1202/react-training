import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Option } from '../index'

export default {
  title: 'Option',
  component: Option,
} as ComponentMeta<typeof Option>

const Template: ComponentStory<typeof Option> = (args) => <Option {...args} />

export const Default = Template.bind({})
Default.args = {}
