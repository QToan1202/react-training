import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Content } from '../index'

export default {
  title: 'Content',
  component: Content,
} as ComponentMeta<typeof Content>

const Template: ComponentStory<typeof Content> = (args) => <Content {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Hello',
}

export const ContentWithTitle = Template.bind({})
ContentWithTitle.args = {
  title: 'My title',
  description: 'Lorem ipsum dolor sit.',
}
