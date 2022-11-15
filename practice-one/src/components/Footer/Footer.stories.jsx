import Footer from './Footer';
import logo from '../../assets/images/logo.svg'
import social_icon from '../../assets/images/ic_social.svg'
import columns from '../../data/columns'

export default {
  title: 'Footer',
  component: Footer,
  argTypes: {
    logo: {
      type: {
        name: 'string',
        required: true,
      },
      table: {
        defaultValue: {
          summary: logo
        },
      },
      defaultValue: logo,
      control: {
        type: 'text',
      },
      description: 'Logo for the footer',
    },
    notice: {
      type: {
        name: 'string',
        required: true,
      },
      table: {
        defaultValue: {
          summary: 'Copyright &#169; 2020 Apple Inc. - All rights reserved.'
        },
      },
      defaultValue: 'Copyright &#169; 2020 Apple Inc. - All rights reserved.',
      control: {
        type: 'text',
      },
      description: 'The copyright notice at the bottom of the page',
    },
    socialIcon: {
      type: {
        name: 'string',
        required: true,
      },
      table: {
        defaultValue: {
          summary: social_icon
        },
      },
      defaultValue: social_icon,
      control: {
        type: 'text',
      },
      description: 'The copyright notice at the bottom of the page',
    },
    columns: {
      type: {
        name: 'array',
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
      description: 'Data for each column',
    },
  },
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});