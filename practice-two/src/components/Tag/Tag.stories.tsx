import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Tag } from '../index'

export default {
  title: 'Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Tag',
}
