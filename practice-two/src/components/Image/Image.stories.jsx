import { Image } from '../index'

export default {
  title: 'Image',
  component: Image,
}

const Template = (args) => <Image {...args} />

export const Default = Template.bind({})
Default.args = {}
