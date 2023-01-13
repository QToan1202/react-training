import { Button } from '../index'

export default {
  title: 'Button',
  component: Button,
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {}

export const Medium = Template.bind({})
Medium.args = {
  size: 'md',
  variant: 'primary',
}

export const Large = Template.bind({})
Large.args = {
  size: 'lg',
  variant: 'secondary',
}
