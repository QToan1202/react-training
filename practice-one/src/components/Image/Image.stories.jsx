import Image from './Image';
import logo from '../../assets/images/logo.svg'

export default {
  title: 'Image',
  component: Image,
  argTypes: {
    src: {
      type: {
        name: 'string',
        required: true,
      },
      defaultValue: logo,
      table: {
        defaultValue: {
          summary: logo
        }
      },
      control: {
        type: 'text',
      },
    },
  },
};

const Template = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {};