import { Button } from '../index'

export default {
  title: 'Button',
  component: Button,
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Button',
}

export const Medium = Template.bind({})
Medium.args = {
  ...Default.args,
  size: 'md',
  variant: 'primary',
}

export const Large = Template.bind({})
Large.args = {
  ...Default.args,
  size: 'lg',
  variant: 'secondary',
}
