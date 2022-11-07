import Form from './Form';

export default {
  title: 'Form',
  component: Form,
  argTypes: {
    title: {
      type: {
        name: 'string',
        required: true,
      },
      defaultValue: 'Hear it first',
      control: {
        type: 'text',
      },
      description: 'Heading of the form',
    },
    subTitle: {
      type: {
        name: 'string',
        required: true,
      },
      defaultValue: 'Get updates on product drops, collaborations and all things Beats.',
      control: {
        type: 'text',
      },
      description: 'Subtitle below the form title',
    },
  },
};

const Template = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {};
