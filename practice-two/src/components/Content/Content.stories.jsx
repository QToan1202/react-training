import { Content } from '../index'

export default {
  title: 'Content',
  component: Content,
}

const Template = (args) => <Content {...args} />

export const Default = Template.bind({})
Default.args = {}

export const ContentWithTitle = Template.bind({})
ContentWithTitle.args = {
  title: 'Hello',
  description: 'Lorem ipsum dolor sit.',
}

export const ContentHeadless = Template.bind({})
ContentWithTitle.args = {
  description: 'Lorem ipsum dolor sit.',
}
