import { Dropdown } from '../index'

export default {
  title: 'Dropdown',
  component: Dropdown,
}

const Template = (args) => <Dropdown.Select {...args} />
const fruitsList = (
  <>
    <Dropdown.Option value="orange" label="Orange" disabled />
    <Dropdown.Option value="starFruit" label="Star Fruit" />
    <Dropdown.Option value="lemon" label="Lemon" />
    <Dropdown.Option value="coconut" label="Coconut" />
  </>
)

export const Default = Template.bind({})
Default.args = {}

export const Fruits = Template.bind({})
Fruits.args = {
  defaultValue: 'orange',
  children: fruitsList,
}
