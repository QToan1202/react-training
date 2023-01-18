import { SearchBar } from '../index'

export default {
  title: 'Search Bar',
  component: SearchBar,
}

const Template = (args) => <SearchBar {...args} />

export const Default = Template.bind({})
Default.args = {}
