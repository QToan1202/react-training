import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Home } from '../index'

export default {
  title: 'Home Page',
  component: Home,
} as ComponentMeta<typeof Home>

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />

export const Default = Template.bind({})
Default.args = {}
