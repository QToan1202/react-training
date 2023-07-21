import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Option, Select } from '../index'

export default {
  title: 'Select',
  component: Select,
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />
const fruitsList = (
  <>
    <Option value="orange" label="Orange" disabled />
    <Option value="starFruit" label="Star Fruit" />
    <Option value="lemon" label="Lemon" />
    <Option value="coconut" label="Coconut" />
  </>
)

export const Default = Template.bind({})
Default.args = {}

export const Fruits = Template.bind({})
Fruits.args = {
  defaultValue: 'orange',
  children: fruitsList,
}
