import Input from './Input';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    type: {
      type: {
        name: 'string',
        required: false,
      },
      defaultValue: 'text',
      table: {
        defaultValue: {
          summary: 'text'
        }
      },
      control: {
        type: 'text',
      },
      description: 'Heading of the form',
    },
  },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {};
