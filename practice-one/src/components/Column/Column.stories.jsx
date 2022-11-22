import columns from '../../data/columns'

import {Column} from '../index'

export default {
  title: 'Column',
  component: Column,
  argTypes: {
    contents: {
      type: {
        name: 'object',
        required: true,
      },
      table: {
        defaultValue: {
          summary: columns
        },
      },
      defaultValue: columns,
      control: {
        type: 'text',
      },
      description: 'The copyright notice at the bottom of the page',
    },
  },
};

const Template = (args) => <Column {...args} />;

export const Default = Template.bind({});