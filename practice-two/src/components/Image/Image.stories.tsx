import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Image } from '../index'

export default {
  title: 'Image',
  component: Image,
} as ComponentMeta<typeof Image>

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />

export const Default = Template.bind({})
Default.args = {}
