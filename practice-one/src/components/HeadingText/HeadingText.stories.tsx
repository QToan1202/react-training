import { ComponentMeta, ComponentStory } from '@storybook/react'
import { HeadingText } from '../index'

export default {
  title: 'Heading Text',
  component: HeadingText,
} as ComponentMeta<typeof HeadingText>

const Template: ComponentStory<typeof HeadingText> = (args) => <HeadingText {...args} />

export const Default = Template.bind({})
Default.args = {
  content: 'Lorem',
}
