import { Button } from '../index'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

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
