import { Input } from '../index'

export default {
  title: 'Input',
  component: Input,
}

const Template = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {}

export const CheckBox = Template.bind({})
CheckBox.args = {
  type: 'checkbox',
  label: 'My checkbox',
}

export const File = Template.bind({})
File.args = {
  type: 'file',
  label: 'Add a file',
}
