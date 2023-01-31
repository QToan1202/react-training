import { Home } from '../index'

export default {
  title: 'Home Page',
  component: Home,
}

const Template = (args) => <Home {...args} />

export const Default = Template.bind({})
Default.args = {}
