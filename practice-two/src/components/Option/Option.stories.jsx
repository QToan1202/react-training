import { Option } from '../index'

export default {
  title: 'Option',
  component: Option,
}

const Template = (args) => <Option {...args} />

export const Default = Template.bind({})
Default.args = {}
