import { Tag } from '../index'

export default {
  title: 'Tag',
  component: Tag,
}

const Template = (args) => <Tag {...args} />

export const Default = Template.bind({})
Default.args = {}
