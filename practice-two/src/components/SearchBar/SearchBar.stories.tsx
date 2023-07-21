import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SearchBar } from '../index'

export default {
  title: 'Search Bar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>

const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args} />

export const Default = Template.bind({})
Default.args = {}
